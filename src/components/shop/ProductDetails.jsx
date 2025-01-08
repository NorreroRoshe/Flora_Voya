import Image from "next/image";
import Link from "next/link";
import AppContext from "@/components/AppContext";
import { useState, useContext, useReducer } from "react";
import { Accordion } from "react-bootstrap";
import { Feature } from "..";
import { toast } from "react-toastify";
import ReviewSection from "../review/ReviewSection";
import DetailsInformation from "../information/DetailsInformation";
import React from 'react';

const initialState = {
  count: 1,
  selectedSize: [],
  selectedColor: [],
  warning: false,
  wishlistData: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "countDecrement":
      return {
        ...state,
        count: state.count > action.value ? state.count - action.value : 1,
      };
    case "countIncrement":
      return {
        ...state,
        count: state.count + action.value,
      };
    case "setSelectedSize":
      return { ...state, selectedSize: action.value };
    case "setSelectedColor":
      return { ...state, selectedColor: action.value };
    case "setWarning":
      return { ...state, warning: action.value };
    case "setWishlistData":
      return { ...state, wishlistData: action.value };
    default:
      return state;
  }
};   

const ProductDetails = ({ details }) => {

  
  const context = useContext(AppContext);
  const { rootState } = context;
  
  const [modalData, dispatch] = useReducer(reducer, initialState);
  const { count, selectedSize, selectedColor, warning, wishlistData } =
  modalData;

  
  // const priceSize = Number(selectedSize[0]?.replace(/\D/g, ''));
  const priceSize = (() => {
    if (selectedSize[0] === "маленький") return 1;
    if (selectedSize[0] === "средний") return 1.49;
    if (selectedSize[0] === "большой") return 2;
    if (selectedSize[0] === "классический (30 см)") return 1;
    if (selectedSize[0] === "большой (40 см)") return 1.49;
    if (selectedSize[0] === "средний (43 см.)") return 1;
    if (selectedSize[0] === "большой (63 см.)") return 1.49;
    if (selectedSize[0] === "экстра (83 см.)") return 1.95;
    if (selectedSize[0] === "x2") return 2;
    if (selectedSize[0] === "x3") return 3;

    // Если не "маленький", "средний" или "большой", вернем результат обработки регуляркой
    return Number(selectedSize[0]?.replace(/\D/g, '')) || 1; 
  })();

  const text1 = details?.description?.text || '';
  const text2 = details?.description?.text1 || '';
  const fullText = text1 + '\n\n' + text2; // Добавляем два переноса строки
    const wordCount = fullText.split(/\s+/).filter(Boolean).length; // Подсчет слов
  
    const [isExpanded, setIsExpanded] = useState(false); // Состояние для управления отображением
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded); // Переключение состояния
    };


  const [tab, setTab] = useState(1);
  // const [count, setCount] = useState(1);
  // const [selectedSize, setSelectedSize] = useState(["m"]);
  // const [selectedColor, setSelectedColor] = useState(["black"]);
  const warningTost = (data) => {
    toast.warn(data, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const successTost = (data) => {
    toast.success(data, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sizeSelect = (data) => {
    let realData = data.toLowerCase();
    if (selectedSize.includes(realData)) {
      // If the selected size is clicked again, it will deselect it.
      dispatch({
        type: "setSelectedSize",
        value: [],
      });
    } else {
      // Only one size can be selected at a time
      dispatch({
        type: "setSelectedSize",
        value: [realData],
      });
    }
  };

  const colorSelect = (data) => {
    let realData = data.toLowerCase();
    if (selectedColor.includes(realData)) {
      let result = selectedColor.filter((el) => el !== realData);
      dispatch({
        type: "setSelectedColor",
        value: result,
      });
    } else {
      let result = [...selectedColor];
      result.push(realData);
      dispatch({
        type: "setSelectedColor",
        value: result,
      });
    }
  };

  const percentage = (partialValue, totalValue) => {
    return Math.round(
      100 - (100 * parseFloat(partialValue)) / parseFloat(totalValue)
    );
  };
  const star = (data) => {
    let totalStar = 0;
    data.map((el) => {
      totalStar += parseInt(el.star);
    });
    const averageStar = Math.round(totalStar / data.length);
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i + "star"}
          className="fa-solid fa-star"
          style={{ color: i <= averageStar ? "#FFAE4F" : "gray" }}
        />
      );
    }
    return stars;
  };
  
  const FullProduct = (data) => {
    // Создаем объект с полной информацией о продукте
    let fullData = {
      id: data.id,
      title: data.title,
      img: data.img,
      price: calculatedPrice,
      dis_price: data.dis_price,
      color: selectedColor,
      pro_code: data.pro_code,
      size: selectedSize,
      quantity: count,
    };
  
    const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    // Проверяем, есть ли уже такой продукт в корзине
    const isProductInCart = cartItems.some(
      (item) =>
        item.id === fullData.id &&
        JSON.stringify(item.color) === JSON.stringify(fullData.color) &&
        JSON.stringify(item.size) === JSON.stringify(fullData.size)
    );
  
    if (isProductInCart) {
      // Если продукт уже в корзине, выводим предупреждение
      warningTost("Данная позиция уже в корзине");
    } else {
      // Обновляем данные корзины в глобальном состоянии (state)
      const updatedCartData = [...rootState.cartData, fullData];
      context.dispatch({
        type: "setCartData",
        value: updatedCartData,
      });
  
      // Обновляем корзину в localStorage
      if (localStorage.getItem('cart') !== null) {
        // Если корзина уже есть в localStorage, обновляем её
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems.push(fullData);
        localStorage.setItem('cart', JSON.stringify(cartItems));
      } else {
        // Если корзина пустая, создаем её с первым элементом
        const cartItems = [];
        cartItems.push(fullData);
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }
  
      // Показываем сообщение об успешном добавлении товара в корзину
      successTost("Успешно добавлено в корзину");
  
      // Очищаем данные о предыдущем заказе, если они существуют
      if (localStorage.getItem('orderData')) {
        localStorage.removeItem('orderData');
      }
      if (localStorage.getItem('totalPrice')) {
        localStorage.removeItem('totalPrice');
      }
      if (localStorage.getItem('totalCount')) {
        localStorage.removeItem('totalCount');
      }
    }
  };
  

  React.useEffect(() => {
    const storedCartData = localStorage.getItem("cartData");
    if (storedCartData) {
      context.dispatch({
        type: "setCartData",
        value: JSON.parse(storedCartData),
      });
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(rootState.cartData));
  }, [rootState.cartData]);
    
  
  React.useEffect(() => {
    // if (details?.colors && details?.colors.length > 0) {
    //   dispatch({
    //     type: "setSelectedColor",
    //     value: [details?.colors[0].name.toLowerCase()],
    //   });
    // } else {
    //   dispatch({
    //     type: "setSelectedColor",
    //     value: [],
    //   });
    // }
    // dispatch({
    //   type: "setSelectedSize",
    //   value: [],
    // });


    // Проверяем, если есть доступные цвета
    if (details?.colors && details?.colors.length > 0) {
      // Ищем цвет, у которого link соответствует id продукта
      const matchedColor = details.colors.find(color => {
        const colorId = color.link.replace('/shop/', ''); // Извлекаем id из link
        return colorId === details.id.toString(); // Сравниваем id с цветом
      });

      // Если найден цвет, устанавливаем его в selectedColor
      if (matchedColor) {
        dispatch({
          type: "setSelectedColor",
          value: [matchedColor.name.toLowerCase()],
        });
      } else {
        // Если совпадений нет, сбрасываем выбранный цвет
        dispatch({
          type: "setSelectedColor",
          value: [],
        });
      }
    } else {
      // Если цветов нет, сбрасываем выбранный цвет
      dispatch({
        type: "setSelectedColor",
        value: [],
      });
    }


     // На случай если хотим чтобы цвет тоже был 0
     if (details?.size && details?.size.length > 0) {
      dispatch({
        type: "setSelectedSize",
        value: [details?.size[0].toLowerCase()],
      });
    } else {
      dispatch({
        type: "setSelectedSize",
        value: [],
      });
    }




  }, [details?.colors
    // ,details?.size
    ]);

    const calculatedPrice = details?.dis_price 
    ? Math.floor(details?.dis_price) * (priceSize > 0 ? priceSize : 1)
    : Math.floor(details?.price) * (priceSize > 0 ? priceSize : 1);

    console.log(details?.colors?.[0].name === "0", 'details,details')

  
  if (details?.nalichie === "0") {
    return (
    <section className="woocomerce__single sec-plr-50 ebrentbrwve">
      <div className="woocomerce__single-wrapper">
        <div className="woocomerce__single-left">
          Такой позиции не существует!
        </div>
      </div>
    </section>
  )}

  return (
    <>
      {details && Object.keys(details).length ? (
        <div>
          <section className="woocomerce__single sec-plr-50 ebrentbrwve">
            <div className="woocomerce__single-wrapper">
              <div className="woocomerce__single-left">
                <div
                  className={` product_imgs ${
                    details?.imgs?.length === 1 ? "wfegbrwafsc" : "woocomerce__single-productview"
                  }`}
                >
                  {details?.imgs?.length >= 2 && 
                    details?.imgs
                    ?.slice() // Создаем копию массива
                    .reverse() // Инвертируем порядок элементов
                    .map((el, i) => (
                      <Image
                        key={i + "details"}
                        width={520}
                        height={685}
                        style={{ height: "auto" }}
                        src={`/assets/imgs/${el}`}
                        alt="single-1"
                        className={`dfdsdas ${details?.imgs?.length === 1 ? "wfegbrwafscvqecwqs" : ""}`}
                      />
                    ))
                  }
                  {details?.imgs?.map((el, i) => (
                    <Image
                      key={i + "details"}
                      width={520}
                      height={685}
                      style={{ height: "auto" }}
                      src={`/assets/imgs/${el}`}
                      alt="single-1"
                      className={`dfdsdsceqvwas ${
                        details?.imgs?.length === 1 ? "wfegbrwafscvqecwqs" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="woocomerce__single-right wc_slide_btm">
                <ul className="woocomerce__single-breadcrumb">
                  <li>
                    <Link href={"/"}>
                      Главная <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/shop/side-bar"}>
                      Магазин <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/collections/${details?.collections}`}
                    >
                      {details?.collections}{" "}
                      <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href={"#"}>{details?.title}</Link>
                  </li> */}
                </ul>
                <div className="woocomerce__single-content">
                  <h2 className="woocomerce__single-title"
                  // style={{marginTop: '20px'}}
                  >{details?.title}</h2>
                  <div className="woocomerce__single-pricelist">
                  {/* <span className="woocomerce__single-discountprice">
                    {details?.dis_price ? Math.floor(details?.dis_price) : Math.floor(details?.price)} ₽
                  </span> */}
                    <span className="woocomerce__single-originalprice">
                      {details?.dis_price ? " ₽" + details?.price : ""}
                    </span>
                    <span className="woocomerce__single-discount">
                      {details?.dis_price
                        ? percentage(details?.dis_price, details?.price) +
                          "%" +
                          " OFF"
                        : ""}
                    </span>
                  </div>
                  {details?.reviews && details?.reviews.length ? (
                    <div className="woocomerce__single-review">
                      <div className="woocomerce__single-star" id="rating_star">
                        {star(details?.reviews)}
                      </div>
                      <span className="woocomerce__single-reviewcount">
                        ({details?.reviews.length} Reviews)
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <Image
                    // key={i + "details"}
                    width={520}
                    height={685}
                    style={{ height: "auto", width: '100%', marginBottom: '15px', marginTop : '15px' }}
                    src={`/assets/imgs/${details?.imgs?.[0]}`}
                    alt="single-1"
                    className={`dfdsdas ${
                      details?.imgs?.length === 1 ? "wfegbrwafscvqecwqs" : ""
                    }`}
                  />
                  {details?.description && (
                    <div>
                      {/* {details?.description.text && (
                        <p className="woocomerce__single-discription">
                          {details?.description?.text}
                        </p>
                      )}
                      {details?.description.text1 && (
                        <p className="woocomerce__single-discription">
                          {details?.description?.text1}
                        </p>
                      )} */}
                      {wordCount > 35 ? (
                        <p className="woocomerce__single-discription">
                          {isExpanded ? (
                            <>
                            {text1}
                              {text2 ? (
                                <>
                                  <br />
                                  <br />
                                  {text2}
                                </>
                              ) : null}
                              <span onClick={toggleExpand} style={{ cursor: 'pointer', color: 'grey' }}>
                                &nbsp;&nbsp;&nbsp;...
                                <span
                                 style={{ marginLeft: '2px' }}
                                >скрыть</span>
                              </span>
                            </>
                          ) : (
                            <>
                              {text1.split(/\s+/).slice(0, 35).join(' ')}
                              {/* &nbsp; */}
                              &nbsp;...
                              <span onClick={toggleExpand} style={{ cursor: 'pointer', color: 'grey', marginLeft: '2px' }}>
                                развернуть
                              </span>
                            </>
                          )}
                        </p>
                      ) : (
                        <p className="woocomerce__single-discription">
                          {text1}
                          <br />
                          <br />
                          {text2}
                        </p>
                      )}

                      <ul className="woocomerce__single-features">
                        {details?.description?.featured?.map((el, i) => (
                          <li key={i + "details"}>
                            <Image
                              width={25}
                              height={14}
                              src="/assets/imgs/woocomerce/check.png"
                              alt="check"
                            />
                            {el.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                    
                  {details?.nalichie === "0" && (
                    <div className="woocomerce__single-discountprice wewvfwdwqdvwe">
                      <span className="woocomerce__single-discountprice werfegfb">
                        нет в наличии
                      </span>
                    </div>
                  )}
                  
                  <span className="woocomerce__single-discountprice">
                    {Math.round(calculatedPrice)} ₽
                    {selectedSize.length === 0 && (
                      <span className="avewrehtryh">
                        &nbsp;за шт.
                      </span>
                    )}
                  </span>

                  <div className="woocomerce__single-varitions">
                    {details?.size?.[0] !== "1 комплект" && (
                      <>
                        <div className="woocomerce__single-stitle">
                          Доступные размеры*
                        </div>
                        <ul
                          className="woocomerce__single-sizelist"
                          style={{ marginTop: "20px" }}
                        >
                          {details?.size?.map((el, i) => (
                            <li
                              className={
                                selectedSize.includes(el.toLowerCase())
                                  ? "selected_background sizewwsews"
                                  : "sizewwsews"
                              }
                              onClick={() => sizeSelect(el)}
                              key={i + "size"}
                            >
                              {el}
                            </li>
                          ))}
                        </ul>
                        {warning ? (
                          <small className="warning_text">
                            {selectedSize.length === 0 ? "Пожалуйста выбите размер" : ""}
                          </small>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                    {details?.colors?.[0].name !== "0" && (
                      <div style={{ marginTop: "30px" }}>
                        <div className="woocomerce__single-stitle">
                          {/* Доступные цвета* */}
                          {details?.colors?.[1]?.name === "x2" ? "Размеры букета" : "Доступные цвета*"}
                          
                            {/* {
                                details?.colors?.[0]?.name === "x1" && details?.colors?.[1]?.name === "x2"
                                  ? "Размеры букета"
                                  : details?.colors?.[0]?.name === "x1" && details?.colors?.[1]?.name !== "x2"
                                  ? ""
                                  : "Доступные цвета*"
                              } */
                            }

                        </div>
                        <ul className="woocomerce__single-sizelist" style={{ marginTop: "20px" }}>
                          {details?.colors?.map((color, i) => (
                            color.img ? (
                              <li
                                className={
                                  selectedColor.includes(color.name.toLowerCase())
                                    ? "selected_background"
                                    : ""
                                }
                                // onClick={() => colorSelect(color.name)}
                                key={i + "color"}
                              >
                                <Link href={`${color.link}`}>
                                  <img className="caWDXQ" src={`/assets/imgs/${color.img}`} alt={color.name}/>
                                </Link>
                              </li>
                            ) : (
                              <li
                              className={
                                selectedColor.includes(color.name.toLowerCase())
                                  ? "selected_background sizewwsews"
                                  : "sizewwsews"
                              }
                                key={i + "color"}
                              >
                                <Link
                                className={
                                  selectedColor.includes(color.name.toLowerCase())
                                    ? "selected_background sizewwsews"
                                    : "sizewwsews"
                                } href={`${color.link}`} style={{textAlign: 'center'}}>
                                  {color.name}
                                </Link>
                              </li>
                            )
                          ))}
                        </ul>
                        {warning ? (
                          <small className="warning_text">
                            {selectedColor.length === 0 ? "пожалуйста выберите цвет" : ""}
                          </small>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                    {/* <div style={{ marginTop: "30px" }}>
                      <div className="woocomerce__single-stitle">
                        Добавьте подходящую вазу
                      </div>
                      <ul className="woocomerce__single-sizelist" style={{ marginTop: "20px" }}>
                        {details?.vase?.map((color, i) => (
                          <li
                            className={
                              selectedColor.includes(color.name.toLowerCase())
                                ? "selected_background"
                                : ""
                            }
                            onClick={() => colorSelect(color.name)}
                            key={i + "color"}
                          >
                            {color.name}
                          </li>
                        ))}
                      </ul>
                      {warning ? (
                        <small className="warning_text">
                          {selectedColor.length === 0 ? "пожалуйста выберите цвет" : ""}
                        </small>
                      ) : (
                        ""
                      )}
                    </div> */}
                    {/* <p className="woocomerce__single-sku">
                      SKU: {details?.pro_code}
                    </p> */}
                  </div>
                  {details?.nalichie !== "0" && (
                    <div className="woocomerce__single-buttons">
                      <div className="woocomerce__single-incrementwrap2">
                        <button
                          className="woocomerce__single-cart2 pointer_cursor"
                          onClick={() =>
                            selectedColor.length && selectedSize.length
                              ? FullProduct(details)
                              : (warningTost("Пожалуйста выберите размер"),
                                dispatch({
                                  type: "setWarning",
                                  value: true,
                                }))
                          }
                        >
                          <Image
                            width={25}
                            height={22}
                            src="/assets/imgs/woocomerce/cart.png"
                            alt="cart"
                          />
                          В корзину
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          {details?.related_product && details?.related_product.length ? (
            <Feature
              featured={details?.related_product}
              headerTitle={"Related"}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductDetails;





// const FullProduct = (data) => {
//   let fullData = {
//     id: data.id,
//     title: data.title,
//     img: data.img,
//     price: calculatedPrice,
//     dis_price: data.dis_price,
//     color: selectedColor,
//     pro_code: data.pro_code,
//     size: selectedSize,
//     quantity: count,
//   };

//   const isProductInCart = rootState.cartData.some(
//     (item) =>
//       item.id === fullData.id &&
//       JSON.stringify(item.color) === JSON.stringify(fullData.color) &&
//       JSON.stringify(item.size) === JSON.stringify(fullData.size)
//   );

//   if (isProductInCart) {
//     warningTost("Данная позиция уже в корзине");
//   } else {
//     const updatedCartData = [...rootState.cartData, fullData];
//     context.dispatch({
//       type: "setCartData",
//       value: updatedCartData,
//     });

//     if (localStorage.getItem('cart') !== null) {
//       const cartItems = JSON.parse(localStorage.getItem('cart'));
//       cartItems.push(fullData);
//       localStorage.setItem('cart', JSON.stringify(cartItems));
//     } else {
//       const cartItems = [];
//       cartItems.push(fullData);
//       localStorage.setItem('cart', JSON.stringify(cartItems));
//     }

//     successTost("Успешно добавлно в корзину");
//   }
// };