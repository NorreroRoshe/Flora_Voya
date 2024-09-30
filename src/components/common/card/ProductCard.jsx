import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import ProductModal from "../modal/ProductModal";
import AppContext from "@/components/AppContext";
import { toast } from "react-toastify";

const ProductCard = ({ el }) => {
  const [modalShow, setModalShow] = useState(false);
  const context = useContext(AppContext);

  const { rootState } = context;
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
  const addWishList = (data) => {
    let customDetails = {
      parent_id: data.id,
      title: data.title,
      img: data.img,
      hover_img: data.hover_img,
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
      <div className="woocomerce__feature-product">
        <div className="woocomerce__feature-thumb">
          <Link href={`/shop/${el.id}`}>
            <div className="img-box">
              <Image
                priority
                width={440}
                height={560}
                style={{ width: "100%", height: "auto" }}
                className="image-box__item"
                src={`/assets/imgs/${el.hover_img}`}
                alt="Blog Thumbnail"
              />
              <Image
                priority
                width={440}
                height={560}
                style={{ width: "100%", height: "auto" }}
                className="woocomerce__feature-mainImg"
                src={`/assets/imgs/${el.img}`}
                alt="product-img"
              />
            </div>
          </Link>

          <div className="woocomerce__feature-hover cwsfegr">
            <div
              className="woocomerce__feature-carttext pointer_cursor"
              onClick={() => setModalShow(true)}
            >
              <Image
                width={18}
                height={15}
                src="/assets/imgs/woocomerce/cart.png"
                alt="cart"
              />
              <p>Быстрый просмотр</p>
            </div>
            {/* <p
              className="woocomerce__feature-heart pointer_cursor"
              onClick={() => addWishList(el)}
            >
              <i
                className={
                  rootState.activeWishList.includes(el.id)
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }
                style={{
                  color: rootState.activeWishList.includes(el.id) ? "red" : "",
                }}
              ></i>
            </p> */}
            
          </div>
          
          <div className="woocomerce__feature-category">
            <div
              className="woocomerce__feature-categorytitle wqefrfb"
              onClick={() => setModalShow(true)}
            >
              <Image
                width={18}
                height={15}
                src="/assets/imgs/woocomerce/plusicon.svg"
                alt="cart"
              />
            </div>
          </div>
          
        </div>
        <div className="woocomerce__feature-content">
          {el.collections && (
            <div className="woocomerce__feature-category wfewve">
              <Link
                className="woocomerce__feature-categorytitle"
                href={`/collections/${el.collections}`}
              >
                {el.collections}
              </Link>
            </div>
          )}
          {el.delivery && (
            <div className="woocomerce__feature-category"
             >
              <Link
                className="woocomerce__feature-categorytitle"
                href={`/delivery/${el.delivery}`}
              >
                {el.delivery}
              </Link>
            </div>
          )}
          <div className="woocomerce__feature-titlewraper">
            <Link
              href={`/shop/${el.id}`}
              className="woocomerce__feature-producttitle"
            >
              {el.title}
            </Link>
          </div>
          {/* <span className="woocomerce__feature-newprice">
            {el.dis_price ? el.dis_price : el.price}
          </span>
          <span className="woocomerce__feature-oldprice">
            {el.dis_price ? el.price : ""}
          </span> */}
        </div>
      </div>
      {modalShow ? (
        <ProductModal product={el} setModalShow={setModalShow} />
      ) : (
        ""
      )}
    </>
  );
};

export default ProductCard;
