import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import tg from "../../../public/assets/imgs/service/1/1.svg";
import inst from "../../../public/assets/imgs/service/1/2.svg";
import site from "../../../public/assets/imgs/service/1/3.svg";
import wa from "../../../public/assets/imgs/service/1/4.svg";
import Image from "next/image";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import LogoCircle from "../../../public/assets/imgs/logo/logo-black.svg";

gsap.registerPlugin(ScrollTrigger);

const ServiceElementV2 = () => {
  return (
      <>
        <section className="service__area service-v2 pt-40 pb-150">
          <div className="container">
            <div className="row ewrtgyuj">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 erwth">
                <div className="sec-title-wrapper wrap">
                  <div className="woocomerce__header-logow">
                    <Link href={"/"}>
                      <Image
                          priority
                          width={190}
                          height={190}
                          src={LogoCircle}
                          alt="Logo"
                          className="scaevdwrbetnge"
                        />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="service__top-text text-anim">
                  {/*<p>*/}
                  {/*  Мы бренд, который сочетает премиальные цветы с безупречным сервисом.*/}
                  {/*  <br/>*/}

                  {/*  Каждую <span>компазицию</span>{" "}*/}
                  {/*  которую мы собираем, делает каждую доставку особенным событием.*/}
                  {/*</p>*/}

                  <p className='dwfegrf' style={{display: 'block'}}>
                    <strong className='sadvfssdfd'>Voya floristica</strong>
                  </p>
                  <p className='dwfegsarf' style={{display: 'block'}}>
                    Премиальный сервис доставки
                  </p>
                </div>
              </div>
            </div>

            <div className="service__list-wrapper">
              <div className="row" style={{justifyContent: "center"}}>
                <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                  <div className="service__list">
                  <Link href="https://t.me/Voya_Floristica">
                      <div
                          className="service__item animation_home1_service"
                          data-service="1"
                      >
                        <div className="service__text">
                          <Image className='wqcdwedfevdfsd' src={tg} alt='TelegramLogo'/>
                        </div>
                        <div className="service__title-wrapper">
                          <h4 className="service__title">
                            Telegram
                          </h4>
                        </div>
                        <div className="service__link">
                          <p>
                            <i className="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/*<Link href="https://www.instagram.com/voya_floristica">*/}
                    {/*  <div*/}
                    {/*      className="service__item  animation_home1_service"*/}
                    {/*      data-service="2"*/}
                    {/*  >*/}
                    {/*    <div className="service__text">*/}
                    {/*      <Image className='wqcdwedfevdfsd' src={inst} alt='InstagramLogo'/>*/}
                    {/*    </div>*/}
                    {/*    <div className="service__title-wrapper">*/}
                    {/*      <h4 className="service__title">*/}
                    {/*        Instagram*/}
                    {/*      </h4>*/}
                    {/*    </div>*/}
                    {/*    <div className="service__link">*/}
                    {/*      <p>*/}
                    {/*        <i className="fa-solid fa-arrow-right"></i>*/}
                    {/*      </p>*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</Link>*/}
                    <Link
                        href="instagram://user?username=voya_floristica"
                        onClick={(e) => {
                          // Если приложение Instagram не установлено, перенаправляем в браузер
                          if (!window.navigator.userAgent.toLowerCase().includes('instagram')) {
                            e.preventDefault(); // Отменяем действие по умолчанию
                            window.location.href = 'https://www.instagram.com/voya_floristica/';
                          }
                        }}
                    >
                      <div
                          className="service__item animation_home1_service"
                          data-service="2"
                      >
                        <div className="service__text">
                          <Image className="wqcdwedfevdfsd" src={inst} alt="InstagramLogo" />
                        </div>
                        <div className="service__title-wrapper">
                          <h4 className="service__title">
                            Instagram
                          </h4>
                        </div>
                        <div className="service__link">
                          <p>
                            <i className="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href="https://wa.me/79999902020">
                      <div
                          className="service__item  animation_home1_service"
                          data-service="4"
                      >
                        <div className="service__text">
                          <Image className='wqcdwedfevdfsd' src={wa} alt='WhatsappLogo'/>
                        </div>
                        <div className="service__title-wrapper">
                          <h4 className="service__title">
                            Whatsapp
                          </h4>
                        </div>
                        <div className="service__link">
                          <p>
                            <i className="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link href="https://voya-floristica.ru">
                      <div
                          className="service__item  animation_home1_service"
                          data-service="3"
                      >
                        <div className="service__text">
                          <Image className='wqcdwedfevdfsd' src={site} alt='WebSiteLogo'/>
                        </div>
                        <div className="service__title-wrapper">
                          <h4 className="service__title">
                            WebSite
                          </h4>
                        </div>
                        <div className="service__link">
                          <p>
                            <i className="fa-solid fa-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default ServiceElementV2;