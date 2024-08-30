import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ScrollTop,
  Preloader,
  Hero,
} from "@/components";

import anemon from "../../public/assets/imgs/flowerCat/anemon.jpg";
import anthurium from "../../public/assets/imgs/flowerCat/anthurium.jpg";
import Bouqet from "../../public/assets/imgs/flowerCat/Bouqet.jpg";
import delphinium from "../../public/assets/imgs/flowerCat/delphinium.jpg";
import freesia from "../../public/assets/imgs/flowerCat/freesia.jpg";
import GERBERaDAISY from "../../public/assets/imgs/flowerCat/GERBERaDAISY.jpg";
import gvozdiki from "../../public/assets/imgs/flowerCat/gvozdiki.jpg";
import Hyacinth from "../../public/assets/imgs/flowerCat/Hyacinth.jpg";
import HYPERICUM from "../../public/assets/imgs/flowerCat/HYPERICUM.jpg";
import Hypsofily from "../../public/assets/imgs/flowerCat/Hypsofily.jpg";
import iris from "../../public/assets/imgs/flowerCat/iris.jpg";
import lily from "../../public/assets/imgs/flowerCat/lily.jpg";
import Lisianthus from "../../public/assets/imgs/flowerCat/Lisianthus.jpg";
import HYDRANGEA from "../../public/assets/imgs/flowerCat/HYDRANGEA.jpg";
import orchid from "../../public/assets/imgs/flowerCat/orchid.jpg";
import peony1 from "../../public/assets/imgs/flowerCat/peony1.jpg";
import Ranunculus from "../../public/assets/imgs/flowerCat/Ranunculus.jpg";
import Roselily from "../../public/assets/imgs/flowerCat/Roselily.jpg";
import roses from "../../public/assets/imgs/flowerCat/roses.jpg";
import Snapdragon from "../../public/assets/imgs/flowerCat/Snapdragon.jpg";
import sprayRose from "../../public/assets/imgs/flowerCat/sprayRose.jpg";
import tulip2 from "../../public/assets/imgs/flowerCat/tulip2.jpg";


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
    "assets/json/advertisingDataCategory.json",
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
        <Preloader />
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

                <Hero advertising={heroAdd} />
          
                <div className="container g-0 pt-30 pb-110">

                <div style={{margin: '30px 25px 20px', paddingBottom: '30px'}}><p style={{textAlign: 'center'}}>
                  Найдите цветок для любого настроения. От романтичных красных роз до нежных белоснежных лилий - цветок для любого случая и получателя. Не знаете, с чего начать? Взгляните на наше цветочное разнообразие ниже.
                  </p></div>



                  <div className="row rrowow reset-grid">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Розы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={roses}
                                alt="Розы"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Розы
                        </h5>
                        <span className="blog__btn" style={{textAlign: 'center'}}>
                          Розы — символ любви и страсти. Их нежные лепестки и аромат наполняют окружающее пространство теплом и романтикой, делая розы незаменимым атрибутом для выражения самых искренних чувств.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Пионы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={peony1}
                                alt="Пионы"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Пионы
                        </h5>
                        <span className="blog__btn">
                          Пионы — воплощение роскоши и изысканности. Их пышные бутоны и насыщенные оттенки символизируют изобилие и процветание, делая пионы идеальным выбором для особых случаев.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Гортензии">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={HYDRANGEA}
                                alt="Гортензии"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Гортензии
                        </h5>
                        <span className="blog__btn">
                          Гортензии — воплощают в себе утонченную красоту и изысканность. Их пышные соцветия и разнообразие оттенков создают атмосферу элегантности и спокойствия, наполняя пространство гармонией и нежностью.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Лизиантусы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Lisianthus}
                                alt="Лизиантусы"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Лизиантусы
                        </h5>
                        <span className="blog__btn">
                          Лизиантусы — воплощение изящества и утонченности. Их нежные лепестки и мягкие оттенки создают атмосферу спокойствия и романтики, наполняя пространство нежностью и гармонией.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Кустовые розы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={sprayRose}
                                alt="Кустовые"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Кустовые розы
                        </h5>
                        <span className="blog__btn">
                          Кустовые розы — символ изобилия и многогранности. Их многочисленные бутоны и разнообразие оттенков придают букету объём и роскошь, делая его идеальным для особых случаев.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Тюльпаны">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={tulip2}
                                alt="Тюльпаны"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Тюльпаны
                        </h5>
                        <span className="blog__btn">
                          Тюльпаны — воплощение весеннего обновления и свежести. Их яркие цвета и изящные формы придают букету энергию и жизненную силу, напоминая о новом начале и надежде.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Ранункулюсы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Ranunculus}
                                alt="Ранункулюсы"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Ранункулюсы (Лютики)
                        </h5>
                        <span className="blog__btn">
                          Ранункулюсы — воплощение изысканности и красоты. Их лепестки и нежные оттенки придают букету неповторимое очарование и элегантность, делая его прекрасным подарком для особых людей.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Антуриумы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={anthurium}
                                alt="Антуриумы"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Антуриумы
                        </h5>
                        <span className="blog__btn">
                          Антуриумы — символ гостеприимства и экзотики. Их яркие и необычные цветы придают букету уникальность и стиль, создавая эффектный акцент в любом интерьере.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Дельфиниумы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={delphinium}
                                alt="Дельфиниумы"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Дельфиниумы
                        </h5>
                        <span className="blog__btn">
                          Дельфиниумы символизируют стремление и вдохновение. Их высокие соцветия и яркие цвета придают букету динамичность и энергию, делая их идеальными для торжественных мероприятий и важных событий.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/bouquets/букеты">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Bouqet}
                                alt="Букеты"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Букеты
                        </h5>
                        <span className="blog__btn">
                          Собранные с любовью и заботой, букеты цветов олицетворяют разнообразие эмоций и чувств, даря радость и тепло сердцу каждого, кто их получает.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Анемоны">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={anemon}
                                alt="Анемоны"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Анемоны
                        </h5>
                        <span className="blog__btn">
                          Анемоны — символ нежности и утонченности. Их деликатные цветы и изящные формы придают букету особый шарм и очарование, создавая атмосферу тепла и любви.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Фрезии">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={freesia}
                                alt="Фрезии"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Фрезии
                        </h5>
                        <span className="blog__btn">
                          Фрезии — воплощение нежности и свежести. Их легкий аромат и нежные оттенки наполняют пространство лёгкостью и весенним настроением, делая букет прекрасным подарком для близких и дорогих сердцу людей.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Гвоздики">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={gvozdiki}
                                alt="Гвоздики"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Гвоздики
                        </h5>
                        <span className="blog__btn">
                          Гвоздики — символ стойкости и верности. Их разнообразные оттенки и стойкие цветы делают их идеальными для выражения уважения и признательности, добавляя букету нотку классической красоты.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Гебера Дейзи">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={GERBERaDAISY}
                                alt="Гебера"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Гебера дейзи
                        </h5>
                        <span className="blog__btn">
                          Символ радости и оптимизма, гебера дейзи с их яркими и солнечными лепестками придают букету жизнерадостность и веселье. Идеально подходят для поднятия настроения и создания позитивной атмосферы.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Гиациты">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Hyacinth}
                                alt="Гиациты"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Гиациты
                        </h5>
                        <span className="blog__btn">
                          Гиацинты — символ возвышенности и вдохновения. Их насыщенный аромат и изысканные оттенки создают атмосферу уюта и гармонии, наполняя пространство магией весны.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Гиперикумы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={HYPERICUM}
                                alt="Гиперикумы"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Гиперикумы
                        </h5>
                        <span className="blog__btn">
                          Гиперикумы — символ радости и защиты. Их яркие ягоды и насыщенные цвета добавляют букету живости и контраста, создавая неповторимое ощущение праздника.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Гипсофилы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Hypsofily}
                                alt="Гипсофилы"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Гипсофилы
                        </h5>
                        <span className="blog__btn">
                          Гипсофилы — символ невинности и чистоты. Их маленькие и нежные цветы придают букету воздушность и лёгкость, создавая атмосферу нежности и романтизма.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Лилии">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={lily}
                                alt="Лилии"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Лилии
                        </h5>
                        <span className="blog__btn">
                          Лилии символизируют чистоту и благородство. Их элегантные и изысканные цветы прекрасно подойдут для тех, кто ценит утонченность и изящность. Они дарят ощущение покоя и гармонии.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Ирисы">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={iris}
                                alt="Ирисы"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Ирисы
                        </h5>
                        <span className="blog__btn">
                          Ирисы — символ веры, мудрости и надежды. Их элегантные и изысканные цветы придают букету благородство и утонченность, создавая атмосферу спокойствия и вдохновения. Идеальный выбор для тех, кто ценит глубину и красоту.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Орхидеи">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={orchid}
                                alt="Орхидеи"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Орхидеи
                        </h5>
                        <span className="blog__btn">
                          Орхидеи — воплощение экзотики и утончённости. Их изысканные формы и разнообразные оттенки символизируют изящество и элегантность, наполняя букет экзотической красотой.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Розалилии">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Roselily}
                                alt="Розалилии"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Розалилии
                        </h5>
                        <span className="blog__btn">
                          Розалилии объединяют в себе элегантность роз и изящество лилий. Эти уникальные цветы символизируют утонченность и благородство, делая их прекрасным выбором для особых моментов и выражения глубоких чувств.
                        </span>
                      </article>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 wnol ">
                      <article className="blog__item">
                        <div className="blog__img-wrapper">
                          <Link href="/collections/Эспарцеты">
                              <Image
                                priority
                                style={{ width: "100%", height: "100%" }}
                                className="image-box__item"
                                src={Snapdragon}
                                alt="Эспарцеты"
                              />
                          </Link>
                        </div>
                        <h5 className='text-center mb-2 mt-1'>
                          Эспарцеты
                        </h5>
                        <span className="blog__btn">
                          Нежные и воздушные, эспарцеты придают букету легкость и непринужденность. Их деликатные цветы создают атмосферу нежности и романтизма.
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
