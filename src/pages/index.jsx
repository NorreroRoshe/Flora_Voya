import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  CommonAnimation,
  CursorAnimation,
  Switcher,
  ScrollTop,
  Preloader,
  ScrollSmootherComponents,
  Header,
  Hero,
  Feature,
  ShopCollections,
  Banner1,
  Banner2,
  Banner3,
  AllWithFilter,
  Category,
  VideoBanner,
  Testimonial,
  Brand,
  Instagram,
  Footer,
  ModernAgencyPortfolio,
  StartupAgencySolution,
  StartupAgencySolution1,
  StartupAgencyFooter,
  PortfolioSwiperServiseBet,
  StartupAgencyPortfolio,
} from "@/components";
import aaa from '../../public/assets/imgs/home-7/Group6.jpg';
import asaa from '../../public/assets/imgs/home-7/Group23.jpg';
import asadsa from '../../public/assets/imgs/home-7/Group24.jpg';
import aaaqw from '../../public/assets/imgs/home-7/Group39.jpg';
import asaaqwer from '../../public/assets/imgs/home-7/Group40.jpg';
import asadsaqwerty from '../../public/assets/imgs/home-7/Group41.jpg';

import a1 from '../../public/assets/imgs/bg/4/solution-bg.png';
import ProductLayout from "@/components/common/layout/ProductLayout";
import { Power2, gsap } from "gsap";

import useSWR from "swr";
import React, { useRef } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const [mode, setMode] = React.useState("");
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (mode == "dark") {
        document.querySelector("body").classList.add("dark");
      } else {
        document.querySelector("body").classList.remove("dark");
      }
      let tHero = gsap.context(() => {
        // $(".btn-hover").on("mouseenter", function (e) {
        //   var x = e.pageX - $(this).offset().left;
        //   var y = e.pageY - $(this).offset().top;

        //   $(this).find("span").css({
        //     top: y,
        //     left: x,
        //   });
        // });

        // $(".btn-hover").on("mouseout", function (e) {
        //   var x = e.pageX - $(this).offset().left;
        //   var y = e.pageY - $(this).offset().top;

        //   $(this).find("span").css({
        //     top: y,
        //     left: x,
        //   });
        // });

        const all_btns = gsap.utils.toArray(".btn_wrapper");
        if (all_btns.length > 0) {
          var all_btn = gsap.utils.toArray(".btn_wrapper");
        } else {
          var all_btn = gsap.utils.toArray("#btn_wrapper");
        }
        const all_btn_cirlce = gsap.utils.toArray(".btn-item");
        all_btn.forEach((btn, i) => {
          $(btn).mousemove(function (e) {
            callParallax(e);
          });
          function callParallax(e) {
            parallaxIt(e, all_btn_cirlce[i], 80);
          }

          function parallaxIt(e, target, movement) {
            var $this = $(btn);
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            gsap.to(target, 0.5, {
              x: ((relX - $this.width() / 2) / $this.width()) * movement,
              y: ((relY - $this.height() / 2) / $this.height()) * movement,
              ease: Power2.easeOut,
            });
          }
          $(btn).mouseleave(function (e) {
            gsap.to(all_btn_cirlce[i], 0.5, {
              x: 0,
              y: 0,
              ease: Power2.easeOut,
            });
          });
        });

        let arr1 = gsap.utils.toArray("#btn_wrapper");
        let arr2 = gsap.utils.toArray(".btn_wrapper");
        const all_buttons = arr1.concat(arr2);

        all_buttons.forEach((btn) => {
          if (!btn.classList.contains("hero__button")) {
            gsap.from(btn, {
              scrollTrigger: {
                trigger: btn,
                start: "top center+=150",
                markers: false,
              },
              opacity: 0,
              y: -70,
              ease: "bounce",
              duration: 1.5,
            });
          }
        });
        let splitTitleLines = gsap.utils.toArray(".title-anim");

        splitTitleLines.forEach((splitTextLine) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          // const itemSplitted = new SplitText(splitTextLine, {
          //   type: "words, lines",
          // });
          // gsap.set(splitTextLine, { perspective: 400 });
          // itemSplitted.split({ type: "lines" });
          // tl.from(itemSplitted.lines, {
          //   duration: 1,
          //   delay: 0.3,
          //   opacity: 0,
          //   rotationX: -80,
          //   force3D: true,
          //   transformOrigin: "top center -50",
          //   stagger: 0.1,
          // });
        });
        let splitTextLines = gsap.utils.toArray(".text-anim p");

        splitTextLines.forEach((splitTextLine) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              duration: 2,
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          // const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
          // gsap.set(splitTextLine, { perspective: 400 });
          // itemSplitted.split({ type: "lines" });
          // tl.from(itemSplitted.lines, {
          //   duration: 1,
          //   delay: 0.5,
          //   opacity: 0,
          //   rotationX: -80,
          //   force3D: true,
          //   transformOrigin: "top center -50",
          //   stagger: 0.1,
          // });
        });
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
  }, [mode]);
  const cursor1 = useRef()
  const cursor2 = useRef()
  const { data: allProduct, error } = useSWR(
    "assets/json/allProducts.json",
    fetcher
  );
  const { data: allAdd, error2 } = useSWR(
    "assets/json/advertisingData.json",
    fetcher
  );
  const { data: allBrand, error3 } = useSWR(
    "assets/json/allBrands.json",
    fetcher
  );
  const { data: allInstagram, error4 } = useSWR(
    "assets/json/allInstagram.json",
    fetcher
  );
  const { data: allCategories, error5 } = useSWR(
    "assets/json/allCategories.json",
    fetcher
  );
  const { data: allReview, error6 } = useSWR(
    "assets/json/allReview.json",
    fetcher
  );
  if (error || error2 || error3 || error4 || error5 || error6 )
    return <div>Failed to load</div>;
  if (
    !allProduct ||
    !allAdd ||
    !allBrand ||
    !allInstagram ||
    !allCategories ||
    !allReview
  )
    return (
      <div>
        {/* <Preloader /> */}
      </div>
    );
  const allData = allProduct.products;
  let allFeatured = [];
  allData.filter((el) => {
    if (el.featured) {
      allFeatured.push(el);
    }
  });
  const featured = allFeatured;
  let allNewProduct = [];
  allData.filter((el) => {
    if (el.new) {
      allNewProduct.push(el);
    }
  });
  const newProduct = allNewProduct;

  const heroAdd = allAdd.hero_advertising;
  
  let bodyBanner1 = [];
  let bodyBanner2 = [];
  allAdd.body_advertising.map((el) => {
    if (el.section == "1") {
      bodyBanner1.push(el);
    } else if (el.section == "2") {
      bodyBanner2.push(el);
    }
  });
  const banner1Add = bodyBanner1;
  const banner2Add = bodyBanner2;

  // if select serially

  // let banner1Add
  // let banner2Add
  // if(allAdd.body_advertising.length >= 2) {
  //   let bodyBanner1 = allAdd.body_advertising.slice(0, 2)
  //   banner1Add = bodyBanner1;

  // }
  // if(allAdd.body_advertising.length > 3) {
  //   let bodyBanner2 = allAdd.body_advertising.slice(2, 4)
  //   banner2Add = bodyBanner2;
  // }

  const brand = allBrand.brands;
  const instagram = allInstagram.instagram;
  const categories = allCategories.categories;
  const review = allReview.review;


  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {/* <CommonAnimation> */}
          <div className="has-smooth" id="has_smooth"></div>
          {/* <ScrollSmootherComponents /> */}
          {/* <CursorAnimation cursor1={cursor1} cursor2={cursor2} /> */}
          {/* <Switcher cursor1={cursor1} cursor2={cursor2} /> */}
          <ScrollTop />
          <div id="smooth-wrapper" className="woocomerce__main">
            <div id="smooth-content">
              <ProductLayout white='black'>

                <Hero advertising={heroAdd} />

                <Feature
                  featured={featured}
                  headerTitle={"САМЫЕ ПОПУЛЯРНЫЕ"}
                  routeName="featured"
                />


                <div className="about__area-8 woocomerce-padding col-xxl-12 col-xl-12 col-lg-12 col-md-12 pb-0">
                  <p className="woocomerce__feature-title sqevwfbeg">КАТЕГОРИИ МАГАЗИНА</p>
                  {/* <h2 className="sec-sub-title qual-text-head title-anim">категории &nbsp; &nbsp; магазина</h2> */}
                </div>
                <div className='scwfevwb'>
                  <div>
                    {/* <Banner2 banner={banner2Add} /> */}
                    <Banner3 banner={banner2Add} />
                  </div>
                  <div className='evdwfb'>
                    {/* <Banner1 banner={banner1Add} /> */}
                  </div>
                </div>

                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 pb-0"
                // style={{marginTop: '100px'}}
                >
                  <Image
                    className='dny'
                    priority
                    style={{width: '100%', maxHeight: '555px', height: '100%'}}
                    src={aaa}
                    alt="Image"
                    />
                    <Image
                    className='dby'
                    priority
                    style={{width: '100%', maxHeight: '794px', height: '100%', marginTop: '35px'}}
                    src={aaaqw}
                    alt="Image"
                    />
                </div>



              <ShopCollections />

              {/* <Category categories={categories} /> */}
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 pb-0" 
              style={{marginTop: '25px'}}
              >
                <Image
                  className='dny'
                  priority
                  style={{width: '100%', maxHeight: '489px', height: '100%', marginTop: '35px'}}
                  src={asaa}
                  alt="Image"
                  />
                  <Image
                  className='dby'
                  priority
                  style={{width: '100%', maxHeight: '1384px', height: '100%'}}
                  src={asaaqwer}
                  alt="Image"
                  />
              </div>
                <ModernAgencyPortfolio />
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 pb-0">
                <Image
                  className='dny'
                  priority
                  style={{width: '100%', maxHeight: '548px', height: '100%'}}
                  src={asadsa}
                  alt="Image"
                  />
                  <Image
                  className='dby'
                  priority
                  style={{width: '100%', maxHeight: '1584px', height: '100%'}}
                  src={asadsaqwerty}
                  alt="Image"
                  />
              </div>

                {/* <StartupAgencyPortfolio /> */}

              </ProductLayout>
            </div>
          </div>
        {/* </CommonAnimation> */}
      </main>
    </>
  );
};

export default Index;
