import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./card/ProductCard";

const ProductSwiper = ({ featured }) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        speed={600}
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-parrow",
          prevEl: ".swiper-button-narrow",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {featured.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <ProductCard dopfont='dopfontawdefvd' dopclass='dopclassawdefvd' el={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductSwiper;
