import Image from "next/image";
import CategorySwiper from "../common/CategorySwiper";
import Link from "next/link";

const Category = ({ categories }) => {
  return (
    <>
      <section className="woocomerce__feature category-feature woocomerce-padding wc_category_products">
        <div className="woocomerce__feature-top">
          <p className="woocomerce__feature-title" style={{textDecoration: 'uppercase'}} >ПОДБОРКА ЦВЕТОВ ПО РАЗНЫМ ПОВОДАМ</p>
          <div className="woocomerce__feature-rightwrapper">
            
            <Link className="woocomerce__feature-viewall" href={"/category"}>
              cмотреть все
            </Link>
            <div className="woocomerce__feature-arrowwrapper">
              <div className="swiper-button-narrow pointer_cursor">
                <Image
                  width={7}
                  height={12}
                  style={{ width: "auto", height: "auto" }}
                  src="/assets/imgs/woocomerce/arrow-left.png"
                  alt="prev"
                />
              </div>
              <div className="swiper-button-parrow pointer_cursor">
                <Image
                  width={7}
                  height={12}
                  style={{ width: "auto", height: "auto" }}
                  src="/assets/imgs/woocomerce/arrow-right.png"
                  alt="prev"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="woocomerce__category">
          <CategorySwiper categories={categories} />
        </div>
      </section>
    </>
  );
};

export default Category;
