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
                      <Link href="/portfolio">Каталог</Link>
                    </li>
                    <li>
                      <Link href="#">Коллекции</Link>
                    </li>
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
                        <Link href="/portfolio">Каталог</Link>
                      </li>
                      <li>
                        <Link href="#">Коллекции</Link>
                      </li>
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
                      <li>Улица Норика Батерфаяна, д. 31</li>
                      <li>
                        <Link href="tel:02574328301" className="phone">
                          +7&nbsp;(999) - 990 - 2020{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="mailto:info@buildyexample.com">
                          info@nazaretty.ru
                        </Link>
                      </li>
                    </ul>
                    <ul className="footer__social-6 mt-30">
                    <li>
                      <Link href="#">
                        <span>
                          {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="inherit" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" stroke="#F8F8F8"></circle><path d="M28.5644 15.7449C28.6971 15.3152 28.5644 15 27.9367 15H25.8573C25.3282 15 25.0865 15.2726 24.9537 15.5721C24.9537 15.5721 23.8965 18.085 22.3984 19.7144C21.9148 20.1885 21.6939 20.3383 21.4303 20.3383C21.2985 20.3383 21.107 20.1885 21.107 19.7588V15.7449C21.107 15.2292 20.9543 15 20.5134 15H17.246C16.916 15 16.7169 15.2384 16.7169 15.4658C16.7169 15.9538 17.466 16.0665 17.5428 17.4418V20.4251C17.5428 21.0786 17.4223 21.1978 17.1568 21.1978C16.4524 21.1978 14.738 18.6756 13.7207 15.7884C13.5225 15.2274 13.3224 15.0009 12.7914 15.0009H10.713C10.1185 15.0009 10 15.2736 10 15.573C10 16.1109 10.7045 18.7726 13.2816 22.293C14.9997 24.6969 17.4185 26 19.6221 26C20.9429 26 21.106 25.7107 21.106 25.2116V23.3946C21.106 22.8161 21.2321 22.6996 21.6503 22.6996C21.9575 22.6996 22.4866 22.8512 23.7201 24.0092C25.1291 25.3826 25.3624 25.9991 26.1541 25.9991H28.2325C28.8261 25.9991 29.1228 25.7098 28.9522 25.1386C28.7654 24.5702 28.0922 23.7431 27.199 22.7643C26.7135 22.2061 25.9882 21.6054 25.7672 21.305C25.4591 20.9177 25.5482 20.7468 25.7672 20.403C25.7682 20.4039 28.3008 16.927 28.5644 15.7449Z" fill="#F8F8F8"></path></svg> */}
                          <i className="fa-brands fa-facebook-f"></i>
                        </span>
                      </Link>
                    </li>
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
                      <Link href="#">
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
                    <li>Улица Норика Батерфаяна, д. 31</li>
                    <li>
                      <Link href="tel:02574328301" className="phone">
                        +7&nbsp;(999) - 990 - 2020{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@buildyexample.com">
                        info@nazaretty.ru
                      </Link>
                    </li>
                  </ul>
                  <ul className="footer__social-6 mt-30">
                    <li>
                      <Link href="#">
                        <span>
                          {/* <svg width="40" height="40" viewBox="0 0 40 40" fill="inherit" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" stroke="#F8F8F8"></circle><path d="M28.5644 15.7449C28.6971 15.3152 28.5644 15 27.9367 15H25.8573C25.3282 15 25.0865 15.2726 24.9537 15.5721C24.9537 15.5721 23.8965 18.085 22.3984 19.7144C21.9148 20.1885 21.6939 20.3383 21.4303 20.3383C21.2985 20.3383 21.107 20.1885 21.107 19.7588V15.7449C21.107 15.2292 20.9543 15 20.5134 15H17.246C16.916 15 16.7169 15.2384 16.7169 15.4658C16.7169 15.9538 17.466 16.0665 17.5428 17.4418V20.4251C17.5428 21.0786 17.4223 21.1978 17.1568 21.1978C16.4524 21.1978 14.738 18.6756 13.7207 15.7884C13.5225 15.2274 13.3224 15.0009 12.7914 15.0009H10.713C10.1185 15.0009 10 15.2736 10 15.573C10 16.1109 10.7045 18.7726 13.2816 22.293C14.9997 24.6969 17.4185 26 19.6221 26C20.9429 26 21.106 25.7107 21.106 25.2116V23.3946C21.106 22.8161 21.2321 22.6996 21.6503 22.6996C21.9575 22.6996 22.4866 22.8512 23.7201 24.0092C25.1291 25.3826 25.3624 25.9991 26.1541 25.9991H28.2325C28.8261 25.9991 29.1228 25.7098 28.9522 25.1386C28.7654 24.5702 28.0922 23.7431 27.199 22.7643C26.7135 22.2061 25.9882 21.6054 25.7672 21.305C25.4591 20.9177 25.5482 20.7468 25.7672 20.403C25.7682 20.4039 28.3008 16.927 28.5644 15.7449Z" fill="#F8F8F8"></path></svg> */}
                          <i className="fa-brands fa-facebook-f"></i>
                        </span>
                      </Link>
                    </li>
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
                      <Link href="#">
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
                        © 2024 | Voya-NR <br />{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                    <div className="footer__nav">
                      <ul className="footer-menu menu-anim">
                        <li>
                          <Link href="/privacy-policy">Политика конфеденциальности</Link>
                        </li>
                        <li>
                          <Link href="/public-oferta">Условия пользования</Link>
                        </li>
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
