import Image from "next/image";
import Link from "next/link";

const Banner1 = ({ banner }) => {
  return (
    <>
      {banner && banner.length && (
        <section className="woocomerce__exclusive woocomerce-padding">
          <div className="woocomerce__exclusive-wrapper wrapper-reverse">
            <Link href='category/Аксессуары%20и%20подарки' className="woocomerce__exclusive-item item4">
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

            {/* <Link href='category/Растения%20для%20помещений' className="woocomerce__exclusive-item">
              <div className="woocomerce__exclusive-img">
                <Image
                  priority
                  width={565}
                  height={611}
                  src={`/assets/imgs/${banner[1].img}`}
                  alt="Image"
                />
              </div>

              <div className="woocomerce__exclusive-content align-left">
                <span className="woocomerce__exclusive-subtitle title-anim">
                  {banner[1].sub_title}
                </span>
                <h2 className="title-anim title-animsadfg">
                  {banner[1].title}
                </h2>
              </div>
            </Link> */}
          </div>
        </section>
      )}
    </>
  );
};

export default Banner1;
