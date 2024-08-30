import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner2 = ({ banner }) => {
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

            <Link href='vazi/Денежные%20букеты' className="woocomerce__exclusive-item item3">
              <div className="woocomerce__exclusive-img">
                <Image
                  priority
                  width={565}
                  height={611}
                  src={`/assets/imgs/${banner[1].img}`}
                  alt="Image"
                  // data-speed="auto"
                />
              </div>

              <div className="woocomerce__exclusive-content align-left">
                <span className="woocomerce__exclusive-subtitle title-anim">
                  {banner[1].sub_title}
                </span>
                <h2 className="title-anim title-animsadfg">
                  {banner[1].title}
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

export default Banner2;
