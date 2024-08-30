"use client";

import React, { useState } from "react";
import { sendWithTg } from "./form.actions4";
// import ArrowBlack from "../../../public/assets/imgs/icon/arrow-black.png";
import Image from "next/image";
import AppContext from "@/components/AppContext";
import { useContext } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;


const fields = {
  email: "Email",
};

const Contact2 = () => {
  //Для отображения загрузки, пока отправляется сообщение
  const [isLoad, setLoad] = useState(false);
  const [isSent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    email: ""
  });

  const context = useContext(AppContext);
  const { rootState } = context;
  // console.log(rootState.cartData, 'context.rootState.cartData')

const cart = rootState.cartData;
// console.log(cart, 'context.rootState.cartData')

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
    if (isValidEmail) alert(`Неправильная почта`);
    
    // Завершаем загрузку и закрываем выполнение функции, не вызывая отправление в телеграмм
    if (isEmpty || isValidEmail ) {
      setLoad(false);
      return;
    }

    // Если же валидация успешна - отправляем запрос
    await sendWithTg(formData)
    .then(() => setSent(true)) // Устанавливаем флаг "Sent" при успешной отправке
    .catch(() => alert("Что-то пошло не так, попробуйте отправить позже"))
    .finally(() => setLoad(false));
  };

  return (        
    <form
      onChange={onFormChange}
      onSubmit={onFormSubmit}
      action="#"
    >
      <div className="footer__newsletter-6">
        <input
          type="email"
          name="email"
          required
          placeholder="Введите ваш e-mail"
        />
        {/* <button disabled={isLoad} type="submit" className="wc-btn-dark wc-btn-dark1">
                        {isLoad ? "Загрузка..." : (isSent ? "Отправлено !" : "Отправить")}
                      </button> */}
        <button disabled={isLoad}  type="submit">
        {isLoad ? "Загрузка..." : (isSent ? 
          // "Отправлено !"
          <i className="fa-solid fa-arrow-right"></i>
           : <i className="fa-solid fa-arrow-right"></i>)}
        </button>
      </div>
    </form>
  );
};

export default Contact2;



