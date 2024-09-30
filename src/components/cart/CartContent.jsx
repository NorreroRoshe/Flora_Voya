import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function CartContent({ el, context }) {
  const router = useRouter();

  const updateCount = (data, selector) => {
    let updateCart = [];
    JSON.parse(localStorage.getItem('cart')).map((el) => {
      if (selector === "minus") {
        if (
          el.parent_id === data.parent_id &&
          JSON.stringify(el.color) === JSON.stringify(data.color) &&
          JSON.stringify(el.size) === JSON.stringify(data.size)
        ) {
          if (el.quantity !== 1) {
            el.quantity -= 1;
          } else {
            el.quantity = 1;
          }
          updateCart.push(el);
        } else {
          updateCart.push(el);
        }
      } else if (selector === "plus") {
        if (
          el.parent_id === data.parent_id &&
          JSON.stringify(el.color) === JSON.stringify(data.color) &&
          JSON.stringify(el.size) === JSON.stringify(data.size)
        ) {
          el.quantity += 1;
          updateCart.push(el);
        } else {
          updateCart.push(el);
        }
      }
    });
    localStorage.setItem('cart', JSON.stringify(updateCart))
    context.dispatch({
      type: "setCartData",
      value: updateCart,
    });
  };

  const deleteCart = (data) => {
    let result = JSON.parse(localStorage.getItem('cart')).filter((el) => {
      if (el.parent_id !== data.parent_id) {
        return el;
      } else if (
        el.parent_id === data.parent_id &&
        JSON.stringify(el.color) !== JSON.stringify(data.color) &&
        JSON.stringify(el.size) !== JSON.stringify(data.size)
      ) {
        return el;
      } else if (
        el.parent_id === data.parent_id &&
        JSON.stringify(el.color) !== JSON.stringify(data.color)
      ) {
        return el;
      } else if (
        el.parent_id === data.parent_id &&
        JSON.stringify(el.size) !== JSON.stringify(data.size)
      ) {
        return el;
      }
    });
    localStorage.setItem('cart', JSON.stringify(result))
    context.dispatch({
      type: "setCartData",
      value: result,
    });
    toast.success('Delete Successfully', {
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

console.log(el,'elel..')  
  
  return (
    <>
      <div className="woocomerce__cart-productlist">
        <div className="woocomerce__cart-product">
          <div
            className="woocomerce__cart-thumb pointer_cursor"
            onClick={() => router.push(`/shop/${el.id}`)}
          >
            <Image
              width={150}
              height={190}
              style={{ height: "auto" }}
              src={`/assets/imgs/${el.img}`}
              alt="cart"
            />
          </div>
          <div
            className="woocomerce__cart-rcontent pointer_cursor"
            onClick={() => router.push(`/shop/${el.id}`)}
          >
            <span className="woocomerce__cart-rtitle">
              <p>{el.title}</p>
            </span>
            <ul className="woocomerce__cart-pinfo">
              <li>Цвет: {el.color.join(", ")}</li>
              <li>Размер: {el.size.join(", ")}</li>
              <li>Артикул: {el.pro_code}</li>
            </ul>
          </div>
        </div>
        <div className="woocomerce__cart-price">
          {Math.round(el.price)} ₽
        </div>

        <div className="woocomerce__cart-quantity">
          <div className="woocomerce__single-counter counter2">
            <p
              className="counter__decrement decrement2 pointer_cursor"
              onClick={() => updateCount(el, "minus")}
            >
              {" "}
              <Image
                width={10}
                height={1}
                src="/assets/imgs/woocomerce/cart-minus.png"
                alt="minus-icon"
              />{" "}
            </p>
            <input
              className="counter__input"
              type="text"
              value={el.quantity}
              name="counter"
              size="5"
              readOnly
            />
            <p
              className="counter__increment increment2 pointer_cursor"
              onClick={() => updateCount(el, "plus")}
            >
              {" "}
              <Image
                width={10}
                height={10}
                src="/assets/imgs/woocomerce/cart-plus.png"
                alt="plus-icon"
              />{" "}
            </p>
          </div>
        </div>
        {/* <div className="woocomerce__cart-total">
          £
          {el.dis_price
            ? parseFloat(el.dis_price) * parseInt(el.quantity)
            : parseFloat(el.price) * parseInt(el.quantity)}
        </div> */}
        <p
          className="woocomerce__cart-close pointer_cursor"
          onClick={() => deleteCart(el)}
        >
          <Image
            width={22}
            height={22}
            src="/assets/imgs/woocomerce/close.png"
            alt="close"
          />
        </p>
      </div>
    </>
  );
}
