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
  message: "Комментари",
  сompany: "Доставка",
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

  // Я реализовал грамотную и удобную работу с формами, советую проанализировать и почитать про неподконтрольные инпуты
  const onFormChange = (e) => {
    //Когда мы пишем у input name="email", у e.target.name поле становится как раз email. Если ничего не напишешь - поле будет пустым.
    const { value } = e.target;
    const name = e.target.name;
    // Дестуктуризируем все поля из formData, обращаемся по ключу, который мы меняем (name, email, message) и записываем в него value
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Фукнция для отправки сообщения в форму
  const onFormSubmit = async (e) => {
    //Для того, чтоб форма не перезагружала страницу
    e.preventDefault();
    //Чтобы мы не могли кликнуть по кнопке несколько раз и отправить 10 одинаковых сообщений и дождались ответа от телеграма, что
    // сообщение доставлено или нет
    setLoad(true);

    // Кастомная простая валидация, попробуй разберись или загрузи участок кода в chatGPT, он пояснит.
    // Для простых проектов не стоит тянуть огромные библиотеки и можно сделать что-то такое.

    // Проходимся по каждому ключу объекта и ищем хотя бы один пустой ключ
    // Вообще данная валидация не нужна, тк ты сделал required на инпутах, но просто запомни данную реализацию, потому что она очень хитрая и умная
    // some ищет первый true и приостанавливает свою работу.
    // Если результат внутренних проверок false - то и some выведет false, что будет значить, что все поля существуют
    const isEmpty = Object.entries(formData).some((item) => {
      //Если поле пустое - то появится ошибка
      let check = item[1] === "";
      if (check) {
        alert(`Заполни поле ${fields[item[0]]}`);
      }
      return check;
    });

    // Проверка email на корректность, попробуй ввести что-то без собаки и он заругается
    const isValidEmail = !RegExp(emailRegex).test(formData.email);
    // if (isValidEmail) alert(`Неправильная почта`);

    // Проверка имени на корректность, в данном случае просто запретил все цифры
    const isValidName = !RegExp(/^[^\d]*$/g).test(formData.name);
    if (isValidName) alert(`Некорректное имя`);

    // const isValidPhone = !phoneRegex.test(formData.phone);
    // if (isValidPhone) alert(`Неправильный телефон`);
    const isValidPhone = formData.phone && !phoneRegex.test(formData.phone);
    if (isValidPhone) alert(`Неправильный телефон`);
    
    
    // Завершаем загрузку и закрываем выполнение функции, не вызывая отправление в телеграмм
    if (isEmpty || isValidName || isValidPhone ) {
      setLoad(false);
      return;
    }

  //   // Если же валидация успешна - отправляем запрос
  //   await sendWithTg(formData, cart, totalPrice, totalCount)
  //   .then(() => setSent(true)) // Устанавливаем флаг "Sent" при успешной отправке
  //   .catch(() => alert("Что-то пошло не так, попробуйте отправить позже"))
  //   .finally(() => setLoad(false));
  // };

  try {
    // await sendWithTg(formData, cart, totalPrice, totalCount);
    // setSent(true);
    // localStorage.removeItem('cart');
    // setFormData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   company: "",
    //   message: ""
    // });
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
            {/* <div className="col-xxl-6 col-xl-6 col-12">
              <input
                type="email"
                name="email"
                placeholder="Почта *"
                required
              />
            </div> */}
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



