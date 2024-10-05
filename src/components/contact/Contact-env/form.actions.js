// import { TG } from "./env";
// // import AppContext from "@/components/AppContext";
// // import { useContext, useEffect, useState } from "react";

// export const sendWithTg = async (formData, cart, totalPrice, totalCount) => {
  
//   // const context = useContext(AppContext);
//   // const { rootState } = context;
//   // console.log(rootState.cartData, 'context.rootState.cartData')
  
//   const userMessage = `
//   Name: ${formData.name}
//   %0AEmail: ${formData.email}
//   %0APhone: ${formData.phone}
//   %0ATimeDel: ${formData.timedel}
//   %0AMessage: ${formData.message}
//   %0AСompany: ${formData.company}
//   `;
//   const itogPrice = `
//   ItogPrice: ${totalPrice}
//   %0ATotalCount: ${totalCount}`;

//   const cartMes = cart
//     .map(
//       (item, index) => `%0A${index + 1} позиция
//     %0Aname: ${item.title};
//     %0Acolor: ${item.color};
//     %0Asize: ${item.size};
//     %0Aprice: ${item.price};
//     %0Acount: ${item.quantity};
//   `,
//     )
//     .join(`%0A%0A`);

//     const params = new URLSearchParams({
//       name: formData.name,
//       phone: formData.phone,
//       date: new Date().toISOString().split('T')[0], // Используйте текущую дату или другую
//       message: formData.message,
//       timedel: formData.timedel,
//       company: formData.company,
//       cartItems: JSON.stringify(cart.map(item => ({
//         id: item.id,
//         title: item.title,
//         img: item.img, // Если вам нужно изображение
//         price: item.price,
//         color: item.color,
//         pro_code: item.pro_code,
//         size: item.size,
//         quantity: item.quantity
//       }))),
//       totalPrice: totalPrice,
//       totalCount: totalCount,
//     });
  
//     // Создаем URL с параметрами
//     const url = `/orderConfirmationBySP?${params.toString()}`;
//   const urlmes = `Пользователь отправил заказ: ${url}`;


//   const message = `${userMessage}%0A%0A%0A${cartMes}%0A%0A%0A${itogPrice}`;

//   return fetch(
//     `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${message}`,
//     { method: "POST" }
//   );
// };


import { TG } from "./env";

export const sendWithTg = async (formData, cart, totalPrice, totalCount) => {

  const currentDate = new Date();
  const date = currentDate.toISOString().split('T')[0];
  const time = currentDate.toTimeString().split(' ')[0];
  const dateAndTime = `${date}, ${time}`;

  const userMessage = `

    ${''}Новый заказ!

    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    TimeDel: ${formData.timedel}
    Address: ${formData.message}
    Comment: ${formData.company}

  `;
  const itogPrice = `
    ItogPrice: ${totalPrice}
    TotalCount: ${totalCount}

`;

  const cartMes = cart
    .map(
      (item, index) => `${index + 1} позиция
    name: ${item.title};
    color: ${item.color};
    size: ${item.size};
    price: ${item.price};
    count: ${item.quantity};
  `,
    )
    .join(``);

  const params = new URLSearchParams({
    name: formData.name,
    phone: formData.phone,
    date: dateAndTime,
    message: formData.message,
    timedel: formData.timedel,
    company: formData.company,
    cartItems: JSON.stringify(cart.map(item => ({
      id: item.id,
      title: item.title,
      img: item.img,
      price: item.price,
      color: item.color,
      pro_code: item.pro_code,
      size: item.size,
      quantity: item.quantity
    }))),
    totalPrice: totalPrice,
    totalCount: totalCount,
  });
  
  // Создаем URL с параметрами
  const url = `https://voya-flax.vercel.app//orderConfirmationBySP?${params.toString()}`;
  
  // Новое сообщение с URL
  const urlmes = `Пользователь отправил заказ: 
  
${url}
  `;

  // Объединяем оба сообщения
  const combinedMessage = `${userMessage}${cartMes}${itogPrice}${urlmes}`;

  // Отправка сообщения в Telegram с использованием encodeURIComponent
  return fetch(
    `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${encodeURIComponent(combinedMessage)}`,
    { method: "POST" }
  );
};
