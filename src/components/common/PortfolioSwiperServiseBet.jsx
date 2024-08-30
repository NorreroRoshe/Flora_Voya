import React, { useState } from "react";
import Link from "next/link";

const PortfolioSwiperServiseBet = () => {

  return (
    <>
      <div className="swiper-slide service-v5">
            <section className="portfolio-section portfolio__service pt-100 pb-140">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                    <h2 className="sec-title"> Сотрудничество</h2>
                  </div>
                  <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                    <div className="sec-text">
                      <p>
                        Бренд Nazaretty приглашает к сотрудничеству дизайнеров и дилеров
                      </p>
                    </div>
                  </div>
                </div>
                <div className="portfolio__service-list">
                  <div className="row" style={{justifyContent: 'center'}}>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="portfolio__service-item">
                        <Link href="/service-details">
                          <h3 className="ps-title">
                            Дизайнерам
                          </h3>
                          <ul>
                            <li>+ Описать</li>
                            <li>+ Плюсы</li>
                            <li>+ Сотрудничества</li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                      <div className="portfolio__service-item">
                        <Link href="/service-details">
                          <h3 className="ps-title">
                            Дилерам
                          </h3>
                          <ul>
                            <li>+ Описать</li>
                            <li>+ Плюсы</li>
                            <li>+ Сотрудничества</li>
                          </ul>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    </>
  );
};
export default PortfolioSwiperServiseBet;
