import Head from "next/head";
import React, { useEffect, useState } from "react";
import $ from "jquery";;
import {
  SplitText,
} from "@/plugins";
import {
  CursorAnimation,
  Switcher,
  ScrollTop,
  Preloader,
  ScrollSmootherComponents,
  DigitalAgencyHeader,
  DigitalAgencyCTA,
  DigitalAgencyFooter,
  ServiceElementV2,
  ServiceBrand,
} from "@/components";


const ServiceV2 = () => {
  return (
      <>
        <Head>
          <title>Все ссылки Voya</title>
          <meta name="description" content="Все ссылки компании Voya" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
              rel="icon"
              type="image/x-icon"
              href="assets/imgs/logo/favicon.png"
          />
        </Head>
        <main>
          <div className="has-smooth" id="has_smooth"></div>
          {/*<ScrollTop />*/}
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <ServiceElementV2/>
              <div className="footer__btm-6 cqwqwcqw saqws">
                <div className="row saegnk">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 asdqwv">
                    <div className="footer__copyright-6">
                      <p className="sadbgkj">
                        © 2025 | Voya-floristica <br/>{" "}
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
        </main>
      </>
  );
};

export default ServiceV2;