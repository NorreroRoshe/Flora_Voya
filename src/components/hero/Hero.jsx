import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Circle01 from "../../../public/assets/imgs/woocomerce/circle-1.png";
import HeroPrev from "../../../public/assets/imgs/woocomerce/hero-prev.png";
import HeroRight from "../../../public/assets/imgs/woocomerce/hero-right.png";



const Hero = ({ advertising }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 767);
  };

    // Проверка размера экрана при загрузке и изменении размера окна
  handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div className="woocomerce__hero">
        <Image
          priority
          width={315}
          height={630}
          src={Circle01}
          alt="shape"
          className="woocomerce__hero-circle"
        />
          {/* <span className="woocomerce__hero-line line1"></span>
          <span className="woocomerce__hero-line line2"></span>
          <span className="woocomerce__hero-line line3"></span>
          <span className="woocomerce__hero-line line4"></span> */}
        <div className="woocomerce-active">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 3000,
            }}
            effect={"slide"}
            fadeEffect={true}
            pagination={{
              el: ".swiper-pagination",
              type: "fraction",
            }}
            navigation={{
              nextEl: ".woocomerce__hero-next",
              prevEl: ".woocomerce__hero-prev",
            }}
          >
            {advertising.map((el) => {
              console.log(el.img,'el.imgMob')
              return (
                <SwiperSlide key={el.id}>
                  <Link
                    href={el?.link}
                    className="woocomerce__hero-item"
                    style={{
                      display: 'block',
                      backgroundImage: `url(/assets/imgs/${
                        isMobile ? el.imgMob : el.img
                      })`,
                    }}
                  ></Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* If we need pagination  */}
          <div className="swiper-pagination"></div>

          {/* If we need navigation buttons  */}
          <div style={{ cursor: "pointer" }} className="woocomerce__hero-prev">
            <Image
              priority
              width={24}
              style={{ height: "auto" }}
              src={HeroPrev}
              alt="shape"
              className="hero-prev-fr"
            />
          </div>
          <div style={{ cursor: "pointer" }} className="woocomerce__hero-next">
            <Image
              priority
              width={24}
              style={{ height: "auto" }}
              src={HeroRight}
              alt="shape"
              className="hero-next-fr"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
