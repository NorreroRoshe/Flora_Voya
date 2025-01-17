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
          <title>Service V2</title>
          <meta name="description" content="Service V2 Description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
              rel="icon"
              type="image/x-icon"
              href="assets/imgs/logo/favicon.png"
          />
        </Head>
        <main>
          <div className="has-smooth" id="has_smooth"></div>
          <ScrollTop />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <ServiceElementV2 />
            </div>
          </div>
        </main>
      </>
  );
};

export default ServiceV2;