import Image from "next/image";
import Link from "next/link";
import ProductModal from "../common/modal/ProductModal";
import { useState } from "react";

export default function WishListItem({ el, removeWishlist }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="wishlist wc_slide_btm">
        <div className="wishlist__thumb">
          <Image
            className="wishlist__mainImg"
            width={225}
            height={305}
            src={`/assets/imgs/${el.img}`}
            alt="wishlist"
          />
          <div className="wishlist__hover">
            <div
              className="wishlist__hbtn pointer_cursor"
              onClick={() => removeWishlist(el)}
            >
              <Image
                width={17}
                height={18}
                src="/assets/imgs/woocomerce/products/delete.png"
                alt="delete"
              />{" "}
              Delete{" "}
            </div>
            <div
              className="wishlist__hbtn pointer_cursor"
              onClick={() => setModalShow(true)}
            >
              <Image
                width={17}
                height={18}
                src="/assets/imgs/woocomerce/products/white-cart.png"
                alt="delete"
              />
              Cart
            </div>
          </div>
        </div>
        <div className="wishlist__content">
          <h3 className="wishlist__title">
            <Link href={`/shop/${el.id}`}>{el.title}</Link>
          </h3>
          <p className="wishlist__price">£{el.dis_price ?? el.price}</p>
        </div>
        {modalShow ? (
          <ProductModal product={el} setModalShow={setModalShow} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
