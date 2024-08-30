import Image from "next/image";
import Link from "next/link";
import AppContext from "@/components/AppContext";
import { useState, useContext } from "react";
import { Accordion } from "react-bootstrap";
import { Feature } from "..";
import { toast } from "react-toastify";
import ReviewSection from "../review/ReviewSection";
import DetailsInformation from "../information/DetailsInformation";
import React from 'react';


const ProductDetails = ({ details }) => {

  console.log(details,'details')

  const context = useContext(AppContext);
  const { rootState } = context;

  const [tab, setTab] = useState(1);
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(["m"]);
  const [selectedColor, setSelectedColor] = useState(["black"]);
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
      setSelectedSize(result);
    } else {
      let results = [...selectedSize];
      results.push(realData);
      setSelectedSize(results);
    }
  };
  const colorSelect = (data) => {
    let realData = data.toLowerCase();
    if (selectedColor.includes(realData)) {
      let result = selectedColor.filter((el) => el !== realData);
      setSelectedColor(result);
    } else {
      let results = [...selectedColor];
      results.push(realData);
      setSelectedColor(results);
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
    let fullData = {
      parent_id: data.id,
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
    
  const addWishList = (data) => {
    let customDetails = {
      parent_id: data.parent_id,
      title: data.title,
      img: data.img[0],
      hover_img: data.img[1],
      price: data.price,
      dis_price: data.dis_price,
      color: data.color,
      pro_code: data.pro_code,
      size: data.size,
    };
    if (rootState.allWishList && rootState.allWishList.length) {
      let result = rootState.allWishList.find(
        (el) => el.parent_id === customDetails.parent_id
      );
      if (result) {
        if (
          JSON.stringify(result.color) ===
            JSON.stringify(customDetails.color) &&
          JSON.stringify(result.size) === JSON.stringify(customDetails.size)
        ) {
          warningTost("Already added");
        } else {
          context.dispatch({
            type: "setAllWishList",
            value: [...rootState.allWishList, customDetails],
          });
          successTost("SuccessFully add to wishlist");
        }
      } else {
        context.dispatch({
          type: "setAllWishList",
          value: [...rootState.allWishList, customDetails],
        });
        context.dispatch({
          type: "setActiveWishList",
          value: [...rootState.activeWishList, customDetails.parent_id],
        });
        successTost("SuccessFully add to wishlist");
      }
    } else {
      context.dispatch({
        type: "setAllWishList",
        value: [...rootState.allWishList, customDetails],
      });
      context.dispatch({
        type: "setActiveWishList",
        value: [...rootState.activeWishList, customDetails.parent_id],
      });
      successTost("SuccessFully add to wishlist");
    }
  };
  return (
    <>
      {details && Object.keys(details).length ? (
        <div>
          <section className="woocomerce__single sec-plr-50">
            <div className="woocomerce__single-wrapper">
              <div className="woocomerce__single-left">
                <div className="woocomerce__single-productview product_imgs">
                  {details.imgs?.map((el, i) => (
                    <Image
                      key={i + "details"}
                      width={520}
                      height={685}
                      style={{ height: "auto" }}
                      src={`/assets/imgs/${el}`}
                      alt="single-1"
                    />
                  ))}
                </div>
                {/* <div className="woocomerce__single-productMore fade_bottom">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setTab(1)}
                        type="button"
                        role="tab"
                        className={tab === 1 ? "nav-link active" : "nav-link"}
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={tab === 2 ? "nav-link active" : "nav-link"}
                        onClick={() => setTab(2)}
                        type="button"
                        role="tab"
                      >
                        Information
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={tab === 3 ? "nav-link active" : "nav-link"}
                        onClick={() => setTab(3)}
                        type="button"
                        role="tab"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    {tab === 1 ? (
                      <div>
                        <p className="woocomerce__single-discription2">
                          {details.description?.text}{" "}
                        </p>
                        <ul className="woocomerce__single-features">
                          {details.description?.featured.map((el, i) => (
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
                    ) : (
                      ""
                    )}
                    {tab === 2 ? (
                      <div>
                        <p>{details.information}</p>
                        <DetailsInformation information={details.information} />
                      </div>
                    ) : (
                      ""
                    )}
                    {tab === 3 ? (
                      <div>
                        <ReviewSection reviews={details.reviews} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div> */}
              </div>
              <div className="woocomerce__single-right wc_slide_btm">
                <ul className="woocomerce__single-breadcrumb">
                  <li>
                    <Link href={"/"}>
                      Главная <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/shop/full"}>
                      Магазин <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      {details.category}{" "}
                      <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>{details.title}</Link>
                  </li>
                </ul>
                <div className="woocomerce__single-content">
                  <h2 className="woocomerce__single-title">{details.title}</h2>
                  <div className="woocomerce__single-pricelist">
                  <span className="woocomerce__single-discountprice">
                    {details.dis_price ? Math.floor(details.dis_price) : Math.floor(details.price)} ₽
                  </span>
                    <span className="woocomerce__single-originalprice">
                      {details.dis_price ? " ₽" + details.price : ""}
                    </span>
                    <span className="woocomerce__single-discount">
                      {details.dis_price
                        ? percentage(details.dis_price, details.price) +
                          "%" +
                          " OFF"
                        : ""}
                    </span>
                  </div>
                  {details.reviews && details.reviews.length ? (
                    <div className="woocomerce__single-review">
                      <div className="woocomerce__single-star" id="rating_star">
                        {star(details.reviews)}
                      </div>
                      <span className="woocomerce__single-reviewcount">
                        ({details.reviews.length} Reviews)
                      </span>
                    </div>
                  ) : (
                    ""
                  )}

                  <div>
                    <p className="woocomerce__single-discription">
                      {details.description?.text}
                    </p>
                    <p className="woocomerce__single-discription">
                      {details.description?.text1}
                    </p>
                    <ul className="woocomerce__single-features">
                      {details.description?.featured?.map((el, i) => (
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
                  <div className="woocomerce__single-varitions">
                    <Accordion className="accordion" id="accordionExample">
                      <Accordion.Item eventKey="0" className="accordion-item">
                        <Accordion.Header
                          className="accordion-header"
                          id="headingOne"
                        >
                          <div className="woocomerce__single-stitle">
                            Available Size
                          </div>
                          <ul className="woocomerce__single-sizelist">
                            {selectedSize.map((el, i) => (
                              <li
                                onClick={() => sizeSelect(el)}
                                key={i + "selectSize"}
                              >
                                {el}
                              </li>
                            ))}
                          </ul>
                        </Accordion.Header>
                        <Accordion.Body className="accordion-body">
                          <ul className="woocomerce__single-sizelist">
                            {details.size?.map((el, i) => (
                              <li
                                onClick={() => sizeSelect(el)}
                                key={i + "size"}
                              >
                                {el}
                              </li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className="accordion-item">
                        <Accordion.Header
                          className="accordion-header"
                          id="headingTwo"
                        >
                          <div className="woocomerce__single-stitle">
                            Available Color
                          </div>
                          <ul className="woocomerce__single-sizelist">
                            {selectedColor.map((el, i) => (
                              <li
                                onClick={() => colorSelect(el)}
                                key={i + "selectColor"}
                              >
                                {el}
                              </li>
                            ))}
                          </ul>
                        </Accordion.Header>
                        <Accordion.Body className="accordion-body">
                          <ul className="woocomerce__single-sizelist">
                            {details.color?.map((el, i) => (
                              <li
                                onClick={() => colorSelect(el)}
                                key={i + "color"}
                              >
                                {el}
                              </li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <p className="woocomerce__single-sku">
                      SKU: {details.pro_code}
                    </p>
                  </div>
                  <div className="woocomerce__single-buttons">
                    <div className="woocomerce__single-incrementwrap">
                      <div className="woocomerce__single-counter">
                        <p
                          onClick={() => setCount(count > 1 ? count - 1 : 1)}
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
                          onClick={() => setCount(count + 1)}
                          className="counter__increment pointer_cursor"
                        >
                          +
                        </p>
                      </div>
                      <button
                        className="woocomerce__single-cart"
                        onClick={() =>
                          selectedColor.length && selectedSize.length
                            ? FullProduct(details)
                            : warningTost("Please select color and size")
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
                      <button
                        className="woocomerce__single-wish"
                        onClick={() => addWishList(details)}
                      >
                        <i
                          className={
                            rootState.activeWishList.includes(details.parent_id)
                              ? "fa-solid fa-heart"
                              : "fa-regular fa-heart"
                          }
                          style={{ fontSize: "20px" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {details.related_product && details.related_product.length ? (
            <Feature
              featured={details.related_product}
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
