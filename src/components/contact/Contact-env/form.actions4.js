import { TG } from "./env";
// import AppContext from "@/components/AppContext";
// import { useContext, useEffect, useState } from "react";

export const sendWithTg = async (formData) => {
  
  // const context = useContext(AppContext);
  // const { rootState } = context;
  // console.log(rootState.cartData, 'context.rootState.cartData')
  
  const userMessage = `Email: ${formData.email}`;

  return fetch(
    `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${userMessage}`,
    { method: "POST" }
  );
};