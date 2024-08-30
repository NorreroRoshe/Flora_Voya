import { useState, useEffect } from "react";
import Image from "next/image";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Circle01 from "../../../public/assets/imgs/woocomerce/circle-1.png";
import HeroPrev from "../../../public/assets/imgs/woocomerce/hero-prev.png";
import HeroRight from "../../../public/assets/imgs/woocomerce/hero-right.png";

const Herosubs = ({ advertising }) => {
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
            speed={2000}
            autoplay={{
              delay: 2000,
            }}
            effect={"fade"}
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
              return (
                <SwiperSlide key={el.id}>
                  <div
                    className="woocomerce__hero-item"
                    style={{
                      height: '813px',
                      backgroundImage: `url(/assets/imgs/${
                        isMobile ? el.imgMob : el.img
                      })`,
                    }}
                  ></div>
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

export default Herosubs;
