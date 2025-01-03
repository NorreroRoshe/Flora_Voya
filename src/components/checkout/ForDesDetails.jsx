import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import TeamDetails from "../../../public/assets/imgs/team/detail.jpg";
import Image from "next/image.js";

const ForDesDetails = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let char_come = document.querySelectorAll(".animation__char_come");

        char_come.forEach((char_come) => {
          let split_char = new SplitText(char_come, { type: "chars, words" });
          gsap.from(split_char.chars, {
            duration: 1,
            x: 70,
            autoAlpha: 0,
            stagger: 0.05,
          });
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="team__detail pt-80">
        <div className="container line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-title-wrapper">
              <h2 className="team__member-name-7">
                  Информация о доставке
                </h2>
                  <br/>
                  <br/>
                  <br/>
                <h3 className="team__member-role-7">
                  <span>Стандартная доставка по Москве и Новой Риге</span>
                </h3>
                  {/* 300 ₽ */}
                  Бесплатно
                  <br/>
                  <br/>
                <p>
                  Заказ на следующий день
                </p>
                <h2 className="team__member-name-7">
                </h2>
                <h3 className="team__member-role-7">
                  <span>Експресс доставка по Москве и Новой риге</span>
                </h3>
                  {/*Бесплатно*/}
                   350 ₽
                <br/>
                <br/>
                  Доставка осуществляется день в день в случае если, заказ сделан до 17:00 с понедельника по субботу (Обратите внимание, что доставка может быть осуществлена ​​примерно до 22:00)
                  <br/>
                  <br/>

                  *Но если вы хотите сделать быстрый заказ чтобы вам доставили в течении 2-х часов , обратитесь в нашу службу поддержки по номер: 8-999-990-20-20.
                <br/>
                <br/>
                <br/>
                {/*<h3 className="team__member-role-7">*/}
                {/*  <span>Доставка на следующий день в Москве</span>*/}
                {/*</h3>*/}
                {/*  350 ₽*/}
                {/*  <br/>*/}
                {/*  <br/>*/}
                {/*<p>*/}
                {/*  Заказ до полуночи с воскресенья по пятницу. Заказ до 13:00 субботы (обратите внимание, что доставка может быть осуществлена ​​примерно до 22:00)*/}
                {/*</p>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<h3 className="team__member-role-7">*/}
                {/*  <span>Доставка в тот же день в Москве</span>*/}
                {/*</h3>*/}
                {/*  400 ₽*/}
                {/*  <br/>*/}
                {/*  <br/>*/}
                {/*<p>*/}
                {/*  Заказ до 13:00 с понедельника по субботу (Обратите внимание, что доставка может быть осуществлена ​​примерно до 22:00)*/}
                {/*</p>*/}
              </div>
              <div className="team__member-work">
                <h4 className="work-title">Соц. сети :</h4>
                <ul>
                  <li>
                    <a target='_blank' href="https://wa.me/79999902020">Wa</a>
                  </li>
                  <li>
                    <a target='_blank' href="https://t.me/Voya_Floristica">Tg</a>
                  </li>
                  {/*<li>*/}
                  {/*  <a target='_blank' href="#">Inst</a>*/}
                  {/*</li>*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForDesDetails;
