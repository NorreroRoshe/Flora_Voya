import Link from "next/link";
import React from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import logoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import DigitalMarketingLogo from "../logo/DigitalMarketingLogo";
import {
  DigitalAgencyBrand
} from "@/components";
import Image from "next/image";
import Contact4 from '../contact/Contact-env/Contact4';

const StartupAgencyFooter = () => {
  return (
    <>

      <footer className="footer__area-6">
        {/* <DigitalAgencyBrand /> */}
        <div className="container g-0 line_4"
        // style={{maxWidth: '1720px'}}
        >
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="footer__top-6 pt-80 asddwq">
                <div className="footer__item-6">
                  <DigitalMarketingLogo />
                  <div style={{ marginBottom: '30px' }}></div>
                  <p>
                    {/* Мы, компания которая не боится рисковать <br /> и мы реализовываем самые безумные идеи в жизнь в сфере освещения. */}
                    Бренд, который сочетает премиальные цветы с безупречным сервисом.
                  </p>
                  {/* <br /> */}
                  <p className='dbdnfff'>
                    Каждую компазицию которую мы собираем, делает каждую доставку особенным событием.
                  </p>
                </div>

                <div className="footer__item-6 ceawgqw">
                  <h2 className="footer__item-title">Информация</h2>
                  <ul className="footer__link-6">
                    <li>
                      <Link href="/">Главная</Link>
                    </li>
                    <li>
                      <Link href="/About-us">О компании</Link>
                    </li>
                    <li>
                      <Link href="/deliverys">Доставка</Link>
                    </li>
                    <li>
                      <Link href="/shop/side-bar">Каталог</Link>
                    </li>
                    {/* <li>
                      <Link href="#">Коллекции</Link>
                    </li> */}
                    <li>
                      <Link href="/Faq">Часто задаваемые вопросы</Link>
                    </li>
                    <li>
                      <Link href="/Contacts">Связаться с нами</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__item-6 ceawsagqw">
                  <div className="footer__item-6 ewghtr">
                    <h2 className="footer__item-title">Информация</h2>
                    <ul className="footer__link-6">
                      <li>
                        <Link href="/">Главная</Link>
                      </li>
                      <li>
                        <Link href="/About-us">О компании</Link>
                      </li>
                      <li>
                        <Link href="/deliverys">Доставка</Link>
                      </li>
                      <li>
                        <Link href="/shop/side-bar">Каталог</Link>
                      </li>
                      {/* <li>
                        <Link href="#">Коллекции</Link>
                      </li> */}
                      <li>
                        <Link href="/Faq">Часто задаваемые вопросы</Link>
                      </li>
                      <li>
                        <Link href="/Contacts">Связаться с нами</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer__item-6 dbdbsss wqsedwss ewghtr">
                    <h2 className="footer__item-title">Конакты</h2>
                    <ul className="footer__info-6">
                      {/* <li>Улица Норика Батерфаяна, д. 31</li> */}
                      <li>
                        <Link href="tel:79999902020" className="phone">
                          +7&nbsp;(999) - 990 - 2020{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="mailto:voya-floristica@mail.ru">
                          voya-floristica@mail.ru
                        </Link>
                      </li>
                    </ul>
                    <ul className="footer__social-6 mt-30">
                      {/* <li>
                        <Link href="#">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </Link>
                      </li> */}
                      <li>
                        <Link href="#">
                          <span>
                            <i className="fa-brands fa-telegram"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span>
                            <i className="fa-brands fa-whatsapp"></i>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/voya_floristica">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="footer__item-6">
                  <h2 className="footer__item-title aesfjvaewm">Новости и распродажа</h2>
                    <Contact4 />
                  
                </div> */}
                <div className="footer__item-6 dndnsss">
                  <h2 className="footer__item-title">Конакты</h2>
                  <ul className="footer__info-6">
                    {/* <li>Улица Норика Батерфаяна, д. 31</li> */}
                    <li>
                      <Link href="tel:79999902020" className="phone">
                        +7&nbsp;(999) - 990 - 2020{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:voya-floristica@mail.ru">
                        voya-floristica@mail.ru
                      </Link>
                    </li>
                  </ul>
                  <ul className="footer__social-6 mt-30">
                    {/* <li>
                      <Link href="#">
                        <span>
                          <i className="fa-brands fa-facebook-f"></i>
                        </span>
                      </Link>
                    </li> */}
                    <li>
                      <Link target='_blank' href="https://t.me/Voya_Floristica">
                        <span>
                          <i className="fa-brands fa-telegram"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link target='_blank' href="https://wa.me/79999902020">
                        <span>
                          <i className="fa-brands fa-whatsapp"></i>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/voya_floristica">
                        <span>
                          <i className="fa-brands fa-instagram"></i>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__btm-6 cqwqwcqw">
                <div className="row saegnk">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 asdqwv">
                    <div className="footer__copyright-6">
                      <p className="sadbgkj">
                        © 2025 | Voya-floristica <br />{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                    <div className="footer__nav">
                      <ul className="footer-menu menu-anim">
                        {/*<li>*/}
                        {/*  <Link href="/privacy-policy">Политика конфеденциальности</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*  <Link href="/public-oferta">Условия пользования</Link>*/}
                        {/*</li>*/}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default StartupAgencyFooter;
