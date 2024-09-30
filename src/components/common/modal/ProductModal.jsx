import AppContext from "@/components/AppContext";
import Image from "next/image";
import { useContext, useEffect, useReducer, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import { toast } from "react-toastify";

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

export default function ProductModal({ setModalShow, product }) {
  const context = useContext(AppContext);
  const { rootState } = context;
  console.log(product, 'cproducta')

  const [modalData, dispatch] = useReducer(reducer, initialState);
  const { count, selectedSize, selectedColor, warning, wishlistData } =
    modalData;

  const priceSize = Number(selectedSize[0]?.replace(/\D/g, ''));

  const [isWideScreen, setIsWideScreen] = useState(false);

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
  // const sizeSelect = (data) => {
  //   let realData = data.toLowerCase();
  //   if (selectedSize.includes(realData)) {
  //     let result = selectedSize.filter((el) => el !== realData);
  //     dispatch({
  //       type: "setSelectedSize",
  //       value: result,
  //     });
  //   } else {
  //     let result = [...selectedSize];
  //     result.push(realData);
  //     dispatch({
  //       type: "setSelectedSize",
  //       value: result,
  //     });
  //   }
  // };

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
    return Math.round((100 * partialValue) / totalValue);
  };

  const FullProduct = (data) => {
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
  
    const isProductInCart = rootState.cartData.some(
      (item) =>
        item.id === fullData.id &&
        JSON.stringify(item.color) === JSON.stringify(fullData.color) &&
        JSON.stringify(item.size) === JSON.stringify(fullData.size)
    );
  
    if (isProductInCart) {
      warningTost("Данная позиция уже в корзине");
    } else {
      const updatedCartData = [...rootState.cartData, fullData];
      context.dispatch({
        type: "setCartData",
        value: updatedCartData,
      });
  
      if (localStorage.getItem('cart') !== null) {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems.push(fullData);
        localStorage.setItem('cart', JSON.stringify(cartItems));
      } else {
        const cartItems = [];
        cartItems.push(fullData);
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }
  
      successTost("Успешно добавлно в корзину");
    }
  };

  useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      dispatch({
        type: "setSelectedColor",
        value: [product.colors[0].name.toLowerCase()],
      });
    } else {
      dispatch({
        type: "setSelectedColor",
        value: [],
      });
    }
    dispatch({
      type: "setSelectedSize",
      value: [],
    });



    //  // На случай если хотим чтобы цвет тоже был 0
     if (product.size && product.size.length > 0) {
      dispatch({
        type: "setSelectedSize",
        value: [product.size[0].toLowerCase()],
      });
    } else {
      dispatch({
        type: "setSelectedSize",
        value: [],
      });
    }




  }, [product.colors
    // ,product.size
    ]);

    useEffect(() => {
      const checkScreenWidth = () => {
        setIsWideScreen(window.innerWidth > 767);
      };
  
      checkScreenWidth(); // Initial check
      window.addEventListener("resize", checkScreenWidth);
  
      return () => {
        window.removeEventListener("resize", checkScreenWidth);
      };
    }, []);
    
    const calculatedPrice = product.dis_price 
    ? Math.floor(product.dis_price) * (priceSize > 0 ? priceSize : 1)
    : Math.floor(product.price) * (priceSize > 0 ? priceSize : 1);


  return (
    <>
      <Modal
        show={true}
        onHide={() => setModalShow(false)}
        size="xl"
        style={{ paddingLeft: "0px" }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <section className="woocomerce__single woocomerce_single2 sec-plr-50">
            <div className="woocomerce__single-wrapper2">
              <div className="woocomerce__single-left" style={{ order: "1" }}>
                {isWideScreen ? (
                  <div className="img-box">
                    <Image
                      priority
                      width={400}
                      height={560}
                      style={{
                        height: "auto",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      className="image-box__item efgwrbetf"
                      src={`/assets/imgs/${product.hover_img}`}
                      alt="Blog Thumbnail"
                    />
                    <Image
                      priority
                      width={400}
                      height={560}
                      style={{
                        height: "auto",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      className="woocomerce__feature-mainImg"
                      src={`/assets/imgs/${product.img}`}
                      alt="product-img"
                    />
                  </div>
                ) : (
                  <div className="img-box">
                    <Image
                      priority
                      width={400}
                      height={560}
                      style={{
                        height: "auto",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      className="woocomerce__feature-mainImg"
                      src={`/assets/imgs/${product.img}`}
                      alt="product-img"
                    />
                  </div>
                )}
              </div>
              <div
                className="woocomerce__single-right wc_slide_btm"
                style={{ order: "1" }}
              >
                <div className="woocomerce__single-content">
                  <div className="wqfevrf">
                    <Link href={`/shop/${product.id}`}>
                      <h2 className="woocomerce__single-title2">{product.title}</h2>
                    </Link>
                    {/* <Link href={`/delivery/${product.delivery}`}>
                      <h2 className="woocomerce__single-title2">{product?.delivery}</h2>
                    </Link> */}
                    {/* <div className="woocomerce__feature-category qewrtfeg ewrfe">
                      <Link
                        className="woocomerce__feature-categorytitle drfeg"
                        href={`/delivery/${product.delivery}`}
                      >
                        {product.delivery}
                      </Link>
                    </div> */}
                  </div>
                  <div className="woocomerce__feature-category qewrtfeg ewweq">
                    <Link
                      className="woocomerce__feature-categorytitle drfeg"
                      href={`/delivery/${product.delivery}`}
                    >
                      {product.delivery}
                    </Link>
                  </div>
                  <div className="woocomerce__single-pricelist">
                    {/* {product.dis_price ? (
                      <>
                        <span className="woocomerce__single-discountprice">
                          £{Math.floor(product.dis_price) * (priceSize > 0 ? priceSize : 1)} ₽
                        </span>
                        <span className="woocomerce__single-originalprice">
                          {Math.floor(product.price) * (priceSize > 0 ? priceSize : 1)} ₽
                        </span>
                        <span className="woocomerce__single-discount">
                          ({percentage(product.dis_price, product.price)}% OFF)
                        </span>
                      </>
                    ) : (
                      <span className="woocomerce__single-discountprice">
                        {Math.floor(product.price) * (priceSize > 0 ? priceSize : 1)} ₽
                      </span>
                    )} */}
                    
                    <span className="woocomerce__single-discountprice">
                      {calculatedPrice} ₽
                      {selectedSize.length === 0 && (
                        <span className="woocomerce__single-discountprice">
                          &nbsp;за шт.
                        </span>
                      )}
                    </span>

                    <div className="woocomerce__feature-category qewrtfeg ewweqsa">
                      <Link
                        className="woocomerce__feature-categorytitle drfeg"
                        href={`/delivery/${product.delivery}`}
                      >
                        {product.delivery}
                      </Link>
                    </div>
                  </div>
                  <div className="woocomerce__single-varitions">
                    {product.size?.[0] !== "1 комплект" && (
                      <>
                        <div className="woocomerce__single-stitle">
                          Доступные размеры*
                        </div>
                        <ul
                          className="woocomerce__single-sizelist"
                          style={{ marginTop: "20px" }}
                        >
                          {product.size?.map((el, i) => (
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
                    {product.colors?.[0].name !== "0" && (
                      <div className='swqevwfbe'>
                        <div className="woocomerce__single-stitle">
                          Доступные цвета*
                        </div>
                        <ul className="woocomerce__single-sizelist" style={{ marginTop: "20px" }}>
                          {product.colors?.map((color, i) => (
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
                                  }
                                  href={`${color.link}`}
                                  style={{textAlign: 'center'}}
                                >
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
                        {product.vase?.map((color, i) => (
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
                              }
                              href={`${color.link}`}
                              style={{textAlign: 'center'}}
                            >
                              {color.name}
                            </Link>
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
                      SKU: {product.pro_code}
                    </p> */}
                  </div>
                  <div className="woocomerce__single-buttons">
                    <div className="woocomerce__single-incrementwrap2">
                      <button
                        className="woocomerce__single-cart2 pointer_cursor"
                        onClick={() =>
                          selectedColor.length && selectedSize.length
                            ? FullProduct(product)
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
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}



  // const FullProduct = (data) => {
  //   let fullData = {
  //     id: data.id,
  //     title: data.title,
  //     img: data.img,
  //     price: data.price,
  //     dis_price: data.dis_price,
  //     color: selectedColor,
  //     pro_code: data.pro_code,
  //     size: selectedSize,
  //     quantity: count,
  //   };
  //   console.log(localStorage.getItem('cart'), 'locCart')
  //   if (rootState.cartData && rootState.cartData.length) {
  //     let result = rootState.cartData.find(
  //       (el) => el.id === fullData.id
  //     );
  //     if (result) {
  //       if (
  //         JSON.stringify(result.color) === JSON.stringify(fullData.color) &&
  //         JSON.stringify(result.size) === JSON.stringify(fullData.size)
  //       ) {
  //         warningTost("Данная позиция уже в корзине");
  //       } else {
  //         context.dispatch({
  //           type: "setCartData",
  //           value: [...rootState.cartData, fullData],
  //         });
  //         if(localStorage.getItem('cart') !== null) {
  //           const cartItems = JSON.parse(localStorage.getItem('cart'));
  //           cartItems.push(fullData)      
  //           localStorage.setItem('cart', JSON.stringify(cartItems))
  //         } else {
  //           const cartItems = [];
  //           cartItems.push(fullData)      
  //           localStorage.setItem('cart', JSON.stringify(cartItems))
  //         }
  //         successTost("Успешно добавлно в корзину");
  //       }
  //     } else {
  //       context.dispatch({
  //         type: "setCartData",
  //         value: [...rootState.cartData, fullData],
  //       });
  //       if(localStorage.getItem('cart') !== null) {
  //         const cartItems = JSON.parse(localStorage.getItem('cart'));
  //         cartItems.push(fullData)      
  //         localStorage.setItem('cart', JSON.stringify(cartItems))
  //       } else {
  //         const cartItems = [];
  //         cartItems.push(fullData)      
  //         localStorage.setItem('cart', JSON.stringify(cartItems))
  //       }
  //       successTost("Успешно добавлно в корзину");
  //     }
  //   } else {
  //     context.dispatch({
  //       type: "setCartData",
  //       value: [...rootState.cartData, fullData],
  //     });
  //     if(localStorage.getItem('cart') !== null) {
  //       const cartItems = JSON.parse(localStorage.getItem('cart'));
  //       cartItems.push(fullData)      
  //       localStorage.setItem('cart', JSON.stringify(cartItems))
  //     } else {
  //       const cartItems = [];
  //       cartItems.push(fullData)      
  //       localStorage.setItem('cart', JSON.stringify(cartItems))
  //     }
  //     successTost("Успешно добавлно в корзину");
  //   }
  // };