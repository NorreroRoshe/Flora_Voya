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
  Banner1,
  Banner2,
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

import Blog55 from "../../public/assets/imgs/catalogImg/1.jpg";
import Blog66 from "../../public/assets/imgs/catalogImg/2.jpg";
import Blog67 from "../../public/assets/imgs/catalogImg/3.jpg";
import Blog68 from "../../public/assets/imgs/catalogImg/4.jpg";
import Blog69 from "../../public/assets/imgs/flowerimg/VASE/SMALlAPOTHECARyVASE/1.jpg";

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

          const itemSplitted = new SplitText(splitTextLine, {
            type: "words, lines",
          });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" });
          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
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

          const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" });
          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
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
    "assets/json/advertisingDataColor.json",
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
  if (error || error2 || error3 || error4 || error5 || error6)
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

  const heroAdd = allAdd.hero_advertising_color;
  // if select section
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
          <div className="has-smooth" id="has_smooth"></div>
          <ScrollTop />
          <div id="smooth-wrapper" className="woocomerce__main">
            <div id="smooth-content">
              <ProductLayout white='black'>

                {/* <Hero advertising={heroAdd} /> */}
          
                <div className="container g-0 pt-30 pb-110">

                <div style={{margin: '30px 25px 20px', paddingBottom: '30px'}}><p style={{textAlign: 'center'}}>В нашем магазины вы найдете цветы и подарки на любой вкус. От романтичных роз до необычных денежных цветов, картин ручной работы. Не знаете, с чего начать? Посмотрите на наш каталог товаров и выберите тот подарок , который порадует вас и ваших близских.</p></div>



                  <div className="row rrowow reset-grid">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/category/Цветы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Blog55}
                                alt="Blog Thumbnail"
                              />
                          </Link>
                        </div>
                        
                        <h5 className='text-center mb-2 mt-1'>
                          Цветы
                        </h5>
                        <span className="blog__btn" style={{textAlign: 'center'}}>
                          Символ красоты и эмоций, наши цветы олицетворяют разнообразие чувств от радости до нежности. Они идеально подходят для того, чтобы выразить свои искренние чувства и подарить улыбку близким.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/category/Аксессуары и подарки">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Blog67}
                                alt="Blog Thumbnail"
                              />
                          </Link>
                        </div>
                        
                        <h5 className='text-center mb-2 mt-1'>
                          Аксессуары и подарки
                        </h5>
                        <span className="blog__btn">
                          Аксессуары и подарки добавляют особое значение любому случаю. Изящные дополнения к букету подчеркивают вашу индивидуальность и создают незабываемое впечатление.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/category/Денежные букеты">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Blog68}
                                alt="Blog Thumbnail"
                              />
                          </Link>
                        </div>
                        
                        <h5 className='text-center mb-2 mt-1'>
                          Денежные цветы
                        </h5>
                        <span className="blog__btn">
                          Денежные цветы представляют собой уникальный способ пожелать финансового благополучия и успеха. Эти оригинальные композиции приносят радость и вдохновение.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/category/Вазы и Кашпо">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Blog69}
                                alt="Blog Thumbnail"
                              />
                          </Link>
                        </div>
                        
                        <h5 className='text-center mb-2 mt-1'>
                          Вазы и кашпо
                        </h5>
                        <span className="blog__btn">
                          Вазы и кашпо придают цветам дополнительный шарм и завершенность. Они идеально подходят для того, чтобы подчеркнуть красоту любого цветочного ансамбля.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/category/Растения для помещений">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Blog66}
                                alt="Blog Thumbnail"
                              />
                          </Link>
                        </div>
                        
                        <h5 className='text-center mb-2 mt-1'>
                          Растения для помещений
                        </h5>
                        <span className="blog__btn">
                          Растения для помещений создают атмосферу тепла и комфорта в вашем доме. Они не только украшают интерьер, но и наполняют пространство свежестью и жизненной энергией
                        </span>
                      </article>
                    </div>
                  </div>
                </div>

              </ProductLayout>
            </div>
          </div>
      </main>
    </>
  );
};

export default Index;
