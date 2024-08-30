import Link from "next/link";
import Image from "next/image";
import box from "../../../public/assets/imgs/shopColl/1.jpg";
import bouq from "../../../public/assets/imgs/shopColl/2.jpg";
import ros from "../../../public/assets/imgs/shopColl/3.jpg";
import prem from "../../../public/assets/imgs/shopColl/4.jpg";
import romantic from "../../../public/assets/imgs/shopColl/5.jpg";
import vasekomp from "../../../public/assets/imgs/shopColl/6.jpg";
import disch from "../../../public/assets/imgs/shopColl/7.jpg";
import cvetcar from "../../../public/assets/imgs/shopColl/8.jpg";
import denbuq from "../../../public/assets/imgs/shopColl/9.jpg";
import cors from "../../../public/assets/imgs/shopColl/10.jpg";


const collections = [
  {
    href: "/collections/боксы",
    imageSrc: box,
    title: "Боксы"
  },
  {
    href: "/feature/designbouquets",
    imageSrc: bouq,
    title: "Дизайнерские букеты"
  },
  {
    href: "/feature/rosesbouquets",
    imageSrc: ros,
    title: "Букеты с розами"
  },
  {
    href: "/feature/premium",
    imageSrc: prem,
    title: "Премиум"
  },
  {
    href: "/feature/romanticcollection",
    imageSrc: romantic,
    title: "Романтическая коллекция"
  },
  // {
    // "rosesbouquets": true,
  //   href: "/collections/",
  //   imageSrc: vasekomp,
  //   title: "Вазовые композиции"
  // },
  // {
  //   href: "/collections/",
  //   imageSrc: disch,
  //   title: "Выбор дизайнеров"
  // },
  {
    href: "/collections/цветочные корзины",
    imageSrc: cvetcar,
    title: "Цветочные корзины"
  },
  {
    href: "/vazi/Денежные букеты",
    imageSrc: denbuq,
    title: "Денежные букеты"
  },
  {
    href: "/collections/корсажи",
    imageSrc: cors,
    title: "Корсаж"
  }
];

const ShopCollections = () => {

  return (
    <>
      <section className="shopify-section index-section">
        <div className="page-width">
          <div className="section-header">
            <h2 className="section-header__title">Коллекции магазина</h2>
          </div>
          <div className="grid grid--uniform">
            {collections.map((collection, index) => (
              <div className="grid__item small--one-half medium-up--one-quarter" key={index}>
                <a href={collection.href} className="collection-item collection-item--overlaid-box aos-init aos-animate" data-aos="row-of-4">
                  <div className="image-wrap">
                    <div className="collection-image collection-image--square lazyloaded" style={{ backgroundPosition: 'center center', backgroundImage: `url(${collection.imageSrc.src})` }}>
                    </div>
                  </div>
                  <span className="collection-item__title collection-item__title--overlaid-box collection-item__title--body collection-item__title--bottom-center">
                    <span>{collection.title}</span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCollections;