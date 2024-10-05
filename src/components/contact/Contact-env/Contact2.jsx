"use client";

import React, { useState } from "react";
import { sendWithTg } from "./form.actions";
// import ArrowBlack from "../../../public/assets/imgs/icon/arrow-black.png";
import Image from "next/image";
import AppContext from "@/components/AppContext";
import { useRouter } from 'next/router';
import { useContext } from "react";

// P.S. сгенерировал chatGPT
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
// const phoneRegex = /^(?:\+7|8)?9\d{9}$/;
const phoneRegex = /^(?:\+7|8)?9\d{0,9}$/;

const fields = {
  name: "Имя",
  phone: "Телефон",
  email: "Email",
  message: "Доставка",
  timedel: "Дата и время доставки",
  сompany: "Комментари",
};

const Contact2 = () => {
  //Для отображения загрузки, пока отправляется сообщение
  const [isLoad, setLoad] = useState(false);
  const [isSent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const router = useRouter();
  const context = useContext(AppContext);
  const { rootState } = context;

  // rootState.cartData;
const cart = JSON.parse(localStorage.getItem('cart'))
// console.log(cart, 'context.rootState.cartData')

const totalPrice = cart?.reduce((sum, item) => {
  return sum + parseFloat(item.price) * item.quantity;
}, 0);

const totalCount = cart?.reduce((sum, item) => {
  return sum + item.quantity;
}, 0);

  const onFormChange = (e) => {
    const { value } = e.target;
    const name = e.target.name;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);

    // const isEmpty = Object.entries(formData).some((item) => {
    //   let check = item[1] === "";
    //   if (check) {
    //     alert(`Заполни поле ${fields[item[0]]}`);
    //   }
    //   return check;
    // });

    const isValidEmail = !RegExp(emailRegex).test(formData.email);

    const isValidName = !RegExp(/^[^\d]*$/g).test(formData.name);
    if (isValidName) alert(`Некорректное имя`);

    const isValidPhone = formData.phone && !phoneRegex.test(formData.phone);
    if (isValidPhone) alert(`Неправильный телефон`);
    
    
    if (
      // isEmpty ||
       isValidName || isValidPhone ) {
      setLoad(false);
      return;
    }

    try {
      await sendWithTg(formData, cart, totalPrice, totalCount);
      setSent(true);

      const currentDateTime = new Date().toLocaleString();

      localStorage.setItem('orderData', JSON.stringify({ ...formData, date: currentDateTime }));
      localStorage.setItem('cartData', JSON.stringify(cart));
      localStorage.setItem('totalPrice', totalPrice);
      localStorage.setItem('totalCount', totalCount);

      router.push('/orderConfirmation');

      localStorage.removeItem('cart');
      setFormData({
        name: "",
        phone: "",
        message: "",
        timedel: "",
        company: ""
      });
    } catch (error) {
      alert("Что-то пошло не так, попробуйте отправить позже");
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
      <div className="contact__form">
        <form
          onChange={onFormChange}
          onSubmit={onFormSubmit}
          action="#"
        >
          <div className="row g-3">
            <div className="col-xxl-12 col-xl-12 col-12">
              <input
                type="text"
                name="name"
                placeholder="Имя *"
                required
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col-xxl-12 col-xl-12 col-12">
              <input
                type="tel"
                name="phone"
                placeholder="Телефон *"
                style={{marginBottom: '12px'}}
              />
            </div>
            <div className="col-xxl-12 col-xl-12 col-12">
              <input
                type="text"
                name="message"
                placeholder="Адрес доставки"
                style={{marginBottom: '12px'}}
              />
            </div>
            <div className="col-xxl-12 col-xl-12 col-12">
              <input
                type="text"
                name="timedel"
                placeholder="Дата и время доставки"
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col-12">
              <textarea
                name="company"
                placeholder="Комментарии"
              ></textarea>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-12">
              <div className="pc-btn">
                <div className="row g-3">
                  <div className="col-12">
                    <div className="pc-btn">
                      <button disabled={isLoad} type="submit" className="wc-btn-dark wc-btn-dark1">
                        {isLoad ? "Загрузка..." : (isSent ? "Отправлено !" : "Отправить")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact2;



