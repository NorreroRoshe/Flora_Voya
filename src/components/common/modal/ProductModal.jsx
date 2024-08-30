// import AppContext from "@/components/AppContext";
// import Image from "next/image";
// import { useContext, useEffect, useReducer, useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import { toast } from "react-toastify";

// const initialState = {
//   count: 1,
//   selectedSize: [],
//   selectedColor: [],
//   warning: false,
//   wishlistData: [],
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "countDecrement":
//       return {
//         ...state,
//         count: state.count > action.value ? state.count - action.value : 1,
//       };
//     case "countIncrement":
//       return {
//         ...state,
//         count: state.count + action.value,
//       };
//     case "setWarning":
//       return { ...state, warning: action.value };
//     case "setWishlistData":
//       return { ...state, wishlistData: action.value };
//     default:
//       return state;
//   }
// };

// export default function ProductModal({ setModalShow, product }) {
//   const context = useContext(AppContext);
//   const { rootState } = context;

//   console.log(product, 'product')


//   const [modalData, dispatch] = useReducer(reducer, initialState);
//   const { count, 
//     // selectedSize,
//     //  selectedColor,
//       warning, wishlistData } =
//     modalData;

//     const [selectedSize, setSelectedSize] = useState(["m"]);
//     const [selectedColor, setSelectedColor] = useState(["black"]);


//   const warningTost = (data) => {
//     toast.warn(data, {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };
//   const successTost = (data) => {
//     toast.success(data, {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };
//   const sizeSelect = (data) => {
//     let realData = data.toLowerCase();
//     if (selectedSize.includes(realData)) {
//       let result = selectedSize.filter((el) => el !== realData);
//       dispatch({
//         type: "setSelectedSize",
//         value: result,
//       });
//     } else {
//       let result = [...selectedSize];
//       result.push(realData);
//       dispatch({
//         type: "setSelectedSize",
//         value: result,
//       });
//     }
//   };
//   const colorSelect = (data) => {
//     let realData = data.toLowerCase();
//     if (selectedColor.includes(realData)) {
//       let result = selectedColor.filter((el) => el !== realData);
//       dispatch({
//         type: "setSelectedColor",
//         value: result,
//       });
//     } else {
//       let result = [...selectedColor];
//       result.push(realData);
//       dispatch({
//         type: "setSelectedColor",
//         value: result,
//       });
//     }
//   };
//   const percentage = (partialValue, totalValue) => {
//     return Math.round((100 * partialValue) / totalValue);
//   };
//   useEffect(() => {
//     dispatch({
//       type: "setSelectedColor",
//       value: [],
//     });
//     dispatch({
//       type: "setSelectedSize",
//       value: [],
//     });
//   }, []);

//   const FullProduct = (data) => {
//     let fullData = {
//       parent_id: data.parent_id,
//       title: data.title,
//       img: data.img,
//       price: data.price,
//       dis_price: data.dis_price,
//       color: selectedColor,
//       pro_code: data.pro_code,
//       size: selectedSize,
//       quantity: count,
//     };
//     if (rootState.cartData && rootState.cartData.length) {
//       let result = rootState.cartData.find(
//         (el) => el.parent_id === fullData.parent_id
//       );
//       if (result) {
//         if (
//           JSON.stringify(result.color) === JSON.stringify(fullData.color) &&
//           JSON.stringify(result.size) === JSON.stringify(fullData.size)
//         ) {
//           warningTost("Already added");
//         } else {
//           context.dispatch({
//             type: "setCartData",
//             value: [...rootState.cartData, fullData],
//           });
//           successTost("SuccessFully add to cart");
//         }
//       } else {
//         context.dispatch({
//           type: "setCartData",
//           value: [...rootState.cartData, fullData],
//         });
//         successTost("SuccessFully add to cart");
//       }
//     } else {
//       context.dispatch({
//         type: "setCartData",
//         value: [...rootState.cartData, fullData],
//       });
//       successTost("SuccessFully add to cart");
//     }
//   };
  

//   const removeWishlist = (data) => {
//     let oldData = [...wishlistData];
//     let result = oldData.find((el) => el.parent_id === data.parent_id);
//     if (result) {
//       let activeIndex = oldData.indexOf(result);
//       oldData.splice(activeIndex, 1);
//       context.dispatch({
//         type: "setAllWishList",
//         value: oldData,
//       });
//       dispatch({
//         type: "setWishlistData",
//         value: oldData,
//       });
//     }
//   };

//   useEffect(() => {
//     dispatch({
//       type: "setWishlistData",
//       value: rootState.allWishList,
//     });
//   }, [rootState.allWishList]);
//   return (
//     <>
//   <Modal
//     show={true}
//     onHide={() => setModalShow(false)}
//     size="xl"
//     style={{ paddingLeft: "0px" }}
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
//   >
//     <Modal.Header closeButton></Modal.Header>
//     <Modal.Body>
//       <section className="woocomerce__single woocomerce_single2 sec-plr-50">
//         <div className="woocomerce__single-wrapper2">
//           <div className="woocomerce__single-left" style={{ order: "1" }}>
//             <div className="img-box">
//               <Image
//                 priority
//                 width={400}
//                 height={560}
//                 style={{
//                   height: "auto",
//                   width: "100%",
//                   objectFit: "cover",
//                 }}
//                 className="image-box__item"
//                 src={`/assets/imgs/${product.hover_img}`}
//                 alt="Blog Thumbnail"
//               />
//               <Image
//                 priority
//                 width={400}
//                 height={560}
//                 style={{
//                   height: "auto",
//                   width: "100%",
//                   objectFit: "cover",
//                 }}
//                 className="woocomerce__feature-mainImg"
//                 src={`/assets/imgs/${product.img}`}
//                 alt="product-img"
//               />
//             </div>
//           </div>
//           <div
//             className="woocomerce__single-right wc_slide_btm"
//             style={{ order: "1" }}
//           >
//             <div className="woocomerce__single-content">
//               <h2 className="woocomerce__single-title2">{product.title}</h2>
//               <div className="woocomerce__single-stitle">
//                 Available Size
//               </div>
//               <ul className="woocomerce__single-sizelist">
//                 {selectedSize.map((el, i) => (
//                   <li
//                     onClick={() => sizeSelect(el)}
//                     key={i + "selectSize"}
//                   >
//                     {el}
//                   </li>
//                 ))}
//               </ul>

//               <div style={{ marginTop: "30px" }}>
//                 <div className="woocomerce__single-stitle">
//                   Available Color
//                 </div>
//                 <ul className="woocomerce__single-sizelist">
//                   {selectedColor.map((el, i) => (
//                     <li
//                       onClick={() => colorSelect(el)}
//                       key={i + "selectColor"}
//                     >
//                       {el}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className="woocomerce__single-buttons">
//               <div className="woocomerce__single-incrementwrap2">
//                 <div className="woocomerce__single-counter-next">
//                   <p
//                     onClick={() =>
//                       dispatch({
//                         type: "countDecrement",
//                         value: 1,
//                       })
//                     }
//                     className="counter__decrement pointer_cursor"
//                   >
//                     &ndash;
//                   </p>
//                   <input
//                     className="counter__input"
//                     type="text"
//                     value={count}
//                     name="counter"
//                     size="5"
//                     readOnly="readonly"
//                   />
//                   <p
//                     onClick={() =>
//                       dispatch({
//                         type: "countIncrement",
//                         value: 1,
//                       })
//                     }
//                     className="counter__increment pointer_cursor"
//                   >
//                     +
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="woocomerce__single-buttons">
//               <div className="woocomerce__single-incrementwrap2">
//                 <button
//                   className="woocomerce__single-cart"
//                   onClick={() =>
//                     selectedColor.length && selectedSize.length
//                       ? FullProduct(product)
//                       : warningTost("Please select color and size")
//                   }
//                 >
//                   <Image
//                     width={25}
//                     height={22}
//                     src="/assets/imgs/woocomerce/cart.png"
//                     alt="cart"
//                   />
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Modal.Body>
//   </Modal>
// </>
//   );
// }









import AppContext from "@/components/AppContext";
import Image from "next/image";
import { useContext, useEffect, useReducer, useState } from "react";
import Modal from "react-bootstrap/Modal";
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
      let result = selectedSize.filter((el) => el !== realData);
      dispatch({
        type: "setSelectedSize",
        value: result,
      });
    } else {
      let result = [...selectedSize];
      result.push(realData);
      dispatch({
        type: "setSelectedSize",
        value: result,
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
  useEffect(() => {
    dispatch({
      type: "setSelectedColor",
      value: [],
    });
    dispatch({
      type: "setSelectedSize",
      value: [],
    });
  }, []);


  const FullProduct = (data) => {
    let fullData = {
      parent_id: data.parent_id,
      title: data.title,
      img: data.img[0],
      price: data.price,
      dis_price: data.dis_price,
      color: selectedColor,
      pro_code: data.pro_code,
      size: selectedSize,
      quantity: count,
    };
    console.log(localStorage.getItem('cart'), 'locCart')
    if (rootState.cartData && rootState.cartData.length) {
      let result = rootState.cartData.find(
        (el) => el.parent_id === fullData.parent_id
      );
      if (result) {
        if (
          JSON.stringify(result.color) === JSON.stringify(fullData.color) &&
          JSON.stringify(result.size) === JSON.stringify(fullData.size)
        ) {
          warningTost("Already added");
        } else {
          context.dispatch({
            type: "setCartData",
            value: [...rootState.cartData, fullData],
          });
          if(localStorage.getItem('cart') !== null) {
            const cartItems = JSON.parse(localStorage.getItem('cart'));
            cartItems.push(fullData)      
            localStorage.setItem('cart', JSON.stringify(cartItems))
          } else {
            const cartItems = [];
            cartItems.push(fullData)      
            localStorage.setItem('cart', JSON.stringify(cartItems))
          }
          successTost("SuccessFully add to cart");
        }
      } else {
        context.dispatch({
          type: "setCartData",
          value: [...rootState.cartData, fullData],
        });
        if(localStorage.getItem('cart') !== null) {
          const cartItems = JSON.parse(localStorage.getItem('cart'));
          cartItems.push(fullData)      
          localStorage.setItem('cart', JSON.stringify(cartItems))
        } else {
          const cartItems = [];
          cartItems.push(fullData)      
          localStorage.setItem('cart', JSON.stringify(cartItems))
        }
        successTost("SuccessFully add to cart");
      }
    } else {
      context.dispatch({
        type: "setCartData",
        value: [...rootState.cartData, fullData],
      });
      if(localStorage.getItem('cart') !== null) {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems.push(fullData)      
        localStorage.setItem('cart', JSON.stringify(cartItems))
      } else {
        const cartItems = [];
        cartItems.push(fullData)      
        localStorage.setItem('cart', JSON.stringify(cartItems))
      }
      successTost("SuccessFully add to cart");
    }
  };

  // Если вдруг не заработает то что вставил
  // const FullProduct = (data) => {
  //   let fullData = {
  //     parent_id: data.parent_id ?? data.id,
  //     title: data.title,
  //     img: data.img,
  //     price: data.price,
  //     dis_price: data.dis_price,
  //     color: selectedColor,
  //     pro_code: data.pro_code,
  //     size: selectedSize,
  //     quantity: count,
  //     collections: data.collections,
  //   };
  //   if (rootState.cartData && rootState.cartData.length) {
  //     let result = rootState.cartData.find(
  //       (el) => el.parent_id === fullData.parent_id
  //     );
  //     if (result) {
  //       if (
  //         JSON.stringify(result.color) === JSON.stringify(fullData.color) &&
  //         JSON.stringify(result.size) === JSON.stringify(fullData.size)
  //       ) {
  //         warningTost("Already added");
  //       } else {
  //         context.dispatch({
  //           type: "setCartData",
  //           value: [...rootState.cartData, fullData],
  //         });
  //         removeWishlist(data);
  //         successTost("SuccessFully add to cart");
  //       }
  //     } else {
  //       context.dispatch({
  //         type: "setCartData",
  //         value: [...rootState.cartData, fullData],
  //       });
  //       removeWishlist(data);
  //       successTost("SuccessFully add to cart");
  //     }
  //   } else {
  //     context.dispatch({
  //       type: "setCartData",
  //       value: [...rootState.cartData, fullData],
  //     });
  //     removeWishlist(data);
  //     successTost("SuccessFully add to cart");
  //   }
  //   setModalShow(false);
  // };

  const removeWishlist = (data) => {
    let oldData = [...wishlistData];
    let result = oldData.find((el) => el.parent_id === data.parent_id);
    if (result) {
      let activeIndex = oldData.indexOf(result);
      oldData.splice(activeIndex, 1);
      context.dispatch({
        type: "setAllWishList",
        value: oldData,
      });
      dispatch({
        type: "setWishlistData",
        value: oldData,
      });
    }
  };

  useEffect(() => {
    dispatch({
      type: "setWishlistData",
      value: rootState.allWishList,
    });
  }, [rootState.allWishList]);
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
                    className="image-box__item"
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
              </div>
              <div
                className="woocomerce__single-right wc_slide_btm"
                style={{ order: "1" }}
              >
                <div className="woocomerce__single-content">
                  <h2 className="woocomerce__single-title2">{product.title}</h2>
                  <div className="woocomerce__single-pricelist">
                    <span className="woocomerce__single-discountprice">
                      £{product.dis_price}
                    </span>
                    <span className="woocomerce__single-originalprice">
                      £{product.price}
                    </span>
                    <span className="woocomerce__single-discount">
                      ({percentage(product.dis_price, product.price)}% OFF)
                    </span>
                  </div>
                  <div className="woocomerce__single-varitions">
                    <div className="woocomerce__single-stitle">
                      Available Size*
                    </div>
                    <ul
                      className="woocomerce__single-sizelist"
                      style={{ marginTop: "20px" }}
                    >
                      {product.size?.map((el, i) => (
                        <li
                          className={
                            selectedSize.includes(el.toLowerCase())
                              ? "selected_background"
                              : ""
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
                        {selectedSize.length === 0 ? "please select size" : ""}
                      </small>
                    ) : (
                      ""
                    )}

                    {/* <div style={{ marginTop: "30px" }}>
                      <div className="woocomerce__single-stitle">
                        Available Color*
                      </div>
                      <ul
                        className="woocomerce__single-sizelist"
                        style={{ marginTop: "20px" }}
                      >
                        {product.color?.map((el, i) => (
                          <li
                            className={
                              selectedColor.includes(el.toLowerCase())
                                ? "selected_background"
                                : ""
                            }
                            onClick={() => colorSelect(el)}
                            key={i + "color"}
                          >
                            {el}
                          </li>
                        ))}
                      </ul>
                      {warning ? (
                        <small className="warning_text">
                          {selectedColor.length === 0
                            ? "please select color"
                            : ""}
                        </small>
                      ) : (
                        ""
                      )}
                    </div> */}
                    <div style={{ marginTop: "30px" }}>
                      <div className="woocomerce__single-stitle">
                        Available Colors img*
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
                              onClick={() => colorSelect(color.name)}
                              key={i + "color"}
                            >
                              {color.name}
                            </li>
                          ) : (
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
                          )
                        ))}
                      </ul>
                      {warning ? (
                        <small className="warning_text">
                          {selectedColor.length === 0 ? "please select color" : ""}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      <div className="woocomerce__single-stitle">
                        Добавьте подходящую вазу
                      </div>
                      <ul className="woocomerce__single-sizelist" style={{ marginTop: "20px" }}>
                        {product.vase?.map((color, i) => (
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
                          {selectedColor.length === 0 ? "please select color" : ""}
                        </small>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="woocomerce__single-sku">
                      SKU: {product.pro_code}
                    </p>
                  </div>
                  <div className="woocomerce__single-buttons">
                    <div className="woocomerce__single-incrementwrap2">
                      <div className="woocomerce__single-counter-next">
                        <p
                          onClick={() =>
                            dispatch({
                              type: "countDecrement",
                              value: 1,
                            })
                          }
                          className="counter__decrement pointer_cursor"
                        >
                          &ndash;
                        </p>
                        <input
                          className="counter__input"
                          type="text"
                          value={count}
                          name="counter"
                          size="5"
                          readOnly="readonly"
                        />
                        <p
                          onClick={() =>
                            dispatch({
                              type: "countIncrement",
                              value: 1,
                            })
                          }
                          className="counter__increment pointer_cursor"
                        >
                          +
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="woocomerce__single-buttons">
                    <div className="woocomerce__single-incrementwrap2">
                      <button
                        className="woocomerce__single-cart2 pointer_cursor"
                        onClick={() =>
                          selectedColor.length && selectedSize.length
                            ? FullProduct(product)
                            : (warningTost("Please select color and size"),
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
                        Add to cart
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
