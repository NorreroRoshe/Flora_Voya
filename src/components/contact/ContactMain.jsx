import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Contact2 from './Contact-env/Contact2';

const ContactMain = ({ contact }) => {
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
        {/* {contact && Object.keys(contact).length ? (
          <div className="container g-0 line pt-120 pb-110">
            <span className="line-3"></span>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="sec-title-wrapper" style={{ zIndex: 0 }}>
                  <h2
                    className="sec-title-2 animation__char_come"
                    ref={animationCharCome}
                  >
                    {contact.title}
                  </h2>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="contact__text">
                  <p>{contact.description}</p>
                </div>
              </div>
            </div>
            <div className="row contact__btm">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div className="contact__info">
                  <h3
                    className="sub-title-anim-top animation__word_come"
                    ref={animationWordCome}
                  >
                    {contact.sub_title}
                  </h3>
                  <ul>
                    <li>
                      <a
                        href={`tel:${contact.mobile
                          .split("-")
                          .join("")
                          .split(" ")
                          .join("")}`}
                      >
                        {contact.mobile}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </li>
                    <li>
                      <span>{contact.address}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="contact__form">
                  <form action="assets/mail.php" method="POST">
                    <div className="row g-3">
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="text" name="name" placeholder="Name *" />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email *"
                        />
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input type="tel" name="phone" placeholder="Phone" />
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-12">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject *"
                        />
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-12">
                        <textarea
                          name="message"
                          placeholder="Messages *"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="btn_wrapper">
                          <button className="wc-btn-primary btn-hover btn-item">
                            <span></span> Send <br />
                            Messages <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )} */}
        <div className="container g-0 line pt-120 pb-0">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="pf-title" style={{ fontSize: '80px' }}>СВЯЖИТЕСЬ С НАМИ.🤟</h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  {
                    "Мы будем рады услышать вас и вместе начать что-то менять и разрабатывать. Звоните нам или оставьте заявку по любым вопросам."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3 className="sub-title-anim-top animation__word_come">
                  {"Остались вопросы ?"}{""} <br />
                  Пожалуйста, свяжитесь с нами !
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
                  {/* <li className="pcf-social-li">
                    <a className="pcf-social-a" href="https://www.instagram.com/chucknorrikk?igsh=MTlhdnkzNmRnOGNnYg==">insagram</a>
                  </li> */}
                  <li>
                    <a className="pcf-social-a" href="https://t.me/Norikyujka">TeleGram</a>
                  </li>
                  <li>
                    <a className="pcf-social-a" href="https://api.whatsapp.com/send?phone=79999902020">WhatsApp</a>
                  </li>
                </ul>
                {/* </div> */}
              </div>
            </div>
            <Contact2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMain;