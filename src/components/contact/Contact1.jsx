import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Contact2 from './Contact-env/Contact2';

const Contact1 = ({ contact }) => {
  const animationWordCome = useRef();
  const animationCharCome = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let char_come = animationCharCome.current;
        let split_char = new SplitText(char_come, { type: "chars, words" });
        gsap.from(split_char.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.05,
        });
        let word_come = animationWordCome.current;
        let split_word_come = new SplitText(word_come, {
          type: "chars words",
          position: "absolute",
        });
        gsap.from(split_word_come.words, {
          duration: 1,
          x: 50,
          autoAlpha: 0,
          stagger: 0.05,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 pb-110">
          {/* <span className="line-3"></span> */}
          <div className="row pt-80" style={{ justifyContent: 'center' }}>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="pf-title sec-title-2"> Контакты &nbsp;
                  {/* 🌷 */}
                  💐</h2>
              </div>
            </div>
            {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  {
                    "Мы будем рады услышать вас и вместе начать что-то менять и разрабатывать. Звоните нам или оставьте заявку по любым вопросам."
                  }
                </p>
              </div>
            </div> */}
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3 className="sub-title-anim-top animation__word_come">
                  {"Остались вопросы ?"}{""} <br />
                  Cвяжитесь с нами !
                </h3>
                <ul>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    Телефон: <a href="tel:79999902020">+7 ( 999 ) 990 - 2020</a>
                  </li>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <span>Почта:</span>
                    <div>
                      <a href="mailto:voya-floristica@mail.ru" style={{ display: 'block' }}>
                        voya-floristica@mail.ru
                      </a>
                    </div>
                  </li>
                  {/* <li>
                  <span>
                    230 Norman Street Moscow-City, <br /> QC (USA) H8R 1A1
                  </span>
                </li> */}
                </ul>
                {/* <div className="pcf-social"> */}
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
                </ul>
                {/* </div> */}
              </div>
            </div>
            <Contact2/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;