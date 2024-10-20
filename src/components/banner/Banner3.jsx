import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner3 = ({ banner }) => {
  return (
    <>
      {banner && banner.length && (
        <section className="woocomerce__exclusive woocomerce-padding">
          <div className="woocomerce__exclusive-wrapper">
            <Link href='category/Цветы' className="woocomerce__exclusive-item item2">
              <div className="woocomerce__exclusive-img">
                <Image
                  priority
                  width={1235}
                  height={611}
                  src={`/assets/imgs/${banner[0].img}`}
                  alt="Image"
                  // data-speed="auto"
                />
              </div>

              <div className="woocomerce__exclusive-content align-left">
                <span className="woocomerce__exclusive-subtitle title-anim">
                  {banner[0].sub_title}
                </span>
                <h2 className="title-anim title-animsadfg">
                  {banner[0].title}
                </h2>
                {/* <div className="woocomerce__exclusive-btnwraper wc_btn_wrapper">
                  <Link
                    className="woocomerce__exclusive-btn"
                    href={"/shop/full"}
                  >
                    Shop Now
                  </Link>
                </div> */}
              </div>
            </Link>

            <Link href='bouquets/букеты' className="woocomerce__exclusive-item item3">
              <div className="woocomerce__exclusive-img">
                <Image
                  priority
                  width={3000}
                  height={611}
                  src={`/assets/imgs/${banner[2].img}`}
                  alt="Image"
                  // data-speed="auto"
                />
              </div>

              <div className="woocomerce__exclusive-content align-left">
                <span className="woocomerce__exclusive-subtitle title-anim">
                  {banner[2].sub_title}
                </span>
                <h2 className="title-anim title-animsadfg">
                  {banner[2].title}
                </h2>
                {/* <div className="woocomerce__exclusive-btnwraper wc_btn_wrapper">
                  <Link
                    className="woocomerce__exclusive-btn"
                    href={"/shop/full"}
                  >
                    Shop Now
                  </Link>
                </div> */}
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Banner3;
