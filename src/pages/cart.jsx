import AppContext from "@/components/AppContext";
import { useContext, useEffect, useState } from "react";
import { Preloader, CartContent } from "@/components";
import ProductLayout from "@/components/common/layout/ProductLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { Contact1Zakaz } from "@/components";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Cart() {
  const { data, error } = useSWR("assets/json/contact.json", fetcher);

  const contact = data?.contact;
  const context = useContext(AppContext);
  const { rootState } = context;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [subTotal, setSubTotal] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (rootState) {
      let allSubTotal = [];
      rootState.cartData.map((el) => {
        allSubTotal.push(
          el.dis_price
            ? parseFloat(el.dis_price) * parseInt(el.quantity)
            : parseFloat(el.price) * parseInt(el.quantity)
        );
      });
      countSubTotal(allSubTotal);
      setLoading(false);
    }
  }, [rootState]);

  const countSubTotal = (data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i += 1) {
      sum += data[i];
    }
    setSubTotal(sum);
  };

  // const texCount = (data) => {
  //   let result = parseFloat(((data / 100) * subTotal).toFixed(2));
  //   return result;
  // };

  // const countTotal = (data) => {
  //   return subTotal + data;
  // };

  // const goToCheckout = (data) => {
  //   context.dispatch({
  //     type: "setTotalCost",
  //     value: data,
  //   });
  //   router.push("/checkout");
  // };

  const calculateTotalPrice = () => {
    if (typeof window !== "undefined") { // Проверяем, что код выполняется на клиенте
      const cartData = JSON.parse(localStorage.getItem('cart')) || [];
      if (cartData.length > 0) {
        const total = cartData.reduce((sum, item) => {
          return sum + parseFloat(item.price) * item.quantity;
        }, 0);
        setTotalPrice(total);
      } else {
        setTotalPrice(0);
      }
      if (cartData.length > 0) {
        const totalCountQ = cartData.reduce((sum, item) => {
          return sum + item.quantity;
        }, 0);
        setTotalCount(totalCountQ);
      } else {
        setTotalCount(0);
      }
    }
  };

  useEffect(() => {
    calculateTotalPrice(); // Initial calculation

    const intervalId = setInterval(() => {
      calculateTotalPrice(); // Periodically check for changes
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Preloader />;
  return (
    <>
      {!loading ? (
        <ProductLayout>
          <div className="woocomerce__cart">
            <div className="woocomerce__cart-wrapper cartwrapper">
              <div className="woocomerce__cart-left cartleft">
                <div className="woocomerce__cart-content">
                  <div className="contact__text"><div className="contact__info">
                    <h3 className="pcf-social-h3">Контакты </h3>
                    <ul style={{ marginBottom: '60px' }}>
                      <li style={{ display: 'flex', gap: '10px' }}>
                        Телефон: <a href="tel:79999902020">+7 ( 999 ) 990 - 2020</a>
                      </li>
                      <li style={{ display: 'flex', gap: '10px' }}>
                        <span>Почта:</span>
                        <div>
                          <a href="mailto:voya-floristica@mail.ru" style={{ display: 'block' }}>
                            voya-floristica@mail.ru
                          </a>
                          {/*<a href="mailto:voya-floristica@mail.ru" style={{ display: 'block' }}>*/}
                          {/*  voya-floristica@mail.ru*/}
                          {/*</a>*/}
                        </div>
                      </li>
                    </ul>
                    <h3 className="pcf-social-h3">Пишите нам в  </h3>
                    <ul className="pcf-social-ul">
                      <li className="pcf-social-li">
                        <a className="pcf-social-a" href="https://www.instagram.com/voya_floristica">Insagram</a>
                      </li>
                      <li>
                        <a target='_blank' className="pcf-social-a" href="https://t.me/Voya_Floristica">TeleGram</a>
                      </li>
                      <li>
                        <a target='_blank' className="pcf-social-a"
                           href="https://api.whatsapp.com/send?phone=79999902020">WhatsApp</a>
                      </li>
                      <li>
                        <a target='_blank' className="pcf-social-a"
                           href="https://www.instagram.com/voya_floristica">Istagram</a>
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
              <div className="woocomerce__cart-right cart-right1">
                {JSON.parse(localStorage.getItem('cart')) && JSON.parse(localStorage.getItem('cart')).length ? (
                  <div className="woocomerce__cart-cartdata">
                    <span className="woocomerce__cart-title">Позиции</span>
                  </div>
                ) : (
                  <div>
                  </div>
                )}
                <div>
                  {JSON.parse(localStorage.getItem('cart')) && JSON.parse(localStorage.getItem('cart')).length ? (
                    <ul className="woocomerce__cart-menuitems">
                      <li>Продукт</li>
                      <li>Цена</li>
                      <li>Количество</li>
                      {/* <li>Total</li> */}
                      <li></li>
                    </ul>
                  ) : (
                    <div>
                    </div>
                  )}
                  {JSON.parse(localStorage.getItem('cart')) && JSON.parse(localStorage.getItem('cart')).length ? (
                    JSON.parse(localStorage.getItem('cart')).map((el, i) => (
                      <CartContent key={i + "cart"} el={el} context={context} />
                    ))
                  ) : (
                    <div>
                      <p>В корзине нету товаров</p>
                      <Button className="mt-3" size="sm" variant="dark">
                        <Link className="text-white" href={"/shop/side-bar"}>
                          Смотреть все продукты
                        </Link>
                      </Button>
                    </div>
                  )}

                  {JSON.parse(localStorage.getItem('cart')) && JSON.parse(localStorage.getItem('cart')).length ? (
                    <>
                      <p style={{ textAlign: 'end', marginRight: '15px', color: '#000', fontSize: '20px' }}>Общее количество: {totalCount} позиций</p>
                      <p style={{ textAlign: 'end', marginRight: '15px', color: '#000', fontSize: '20px' }}>Итог: {totalPrice} ₽</p>
                    </>
                  ) : (
                    <div>
                    </div>
                  )}
                </div>
                {JSON.parse(localStorage.getItem('cart')) && JSON.parse(localStorage.getItem('cart')).length ? (
                  <Contact1Zakaz contact={contact} />
                ) : (''
                )}
              </div>
            </div>
          </div>
        </ProductLayout>
      ) : (
        // <Preloader />
        <></>
      )}
    </>
  );
}
