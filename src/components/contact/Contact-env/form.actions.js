import { TG } from "./env";
// import AppContext from "@/components/AppContext";
// import { useContext, useEffect, useState } from "react";

export const sendWithTg = async (formData, cart) => {
  
  // const context = useContext(AppContext);
  // const { rootState } = context;
  // console.log(rootState.cartData, 'context.rootState.cartData')
  
  const userMessage = `
  Name: ${formData.name}
  %0AEmail: ${formData.email}
  %0APhone: ${formData.phone}
  %0AMessage: ${formData.message}
  %0AСompany: ${formData.company}
  `;

  const cartMes = cart
    .map(
      (item, index) => `%0A${index + 1} позиция
    %0Aname: ${item.title};
    %0Acolor: ${item.color};
    %0Asize: ${item.size};
    %0Acollection: ${item.collections};
  `,
    )
    .join(`%0A%0A`);

  const message = `${userMessage}%0A%0A%0A${cartMes}`;

  return fetch(
    `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${message}`,
    { method: "POST" }
  );
};