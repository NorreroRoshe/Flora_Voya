import React, { useEffect } from "react";
import { gsap } from "gsap";
import ThumbDev1 from "../../../public/assets/imgs/thumb/dev-1.jpg";
import ThumbDev2 from "../../../public/assets/imgs/thumb/dev-2.jpg";
import { ScrollTrigger } from "@/plugins";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  if (typeof window !== "undefined") {
    const serviceImgItem = document.querySelectorAll(".service__item-3");

    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    serviceImgItem.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, item), 1000);
      });
    });
  }

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper pt-130 text-anim">
                <h2 className="sec-sub-title title-anim">Контакты</h2>
                <h3 className="sec-title sec-title25852 title-anim">
                  Nazaretty <br />
                </h3>
                <p>
                  <div className='mb-10'>
                  <span className='color-white'>Тел.:</span> <Link className='fwwh' href='tel:02094980547'>+7 (999) 990-20-20</Link>
                  </div>
                  <div className='mb-10'>
                  <span className='color-white'>Тел.:</span> <Link className='fwwh' href="mailto:info@nazaretty.ru">info@nazaretty.ru</Link>
                  </div>
                  <div className='mb-10'>
                  <span className='color-white'>Улица Сереги Назатеряна 8, Москва</span>
                  </div>
                </p>
                {/* <p>
                  <span className='color-white'>Тел.:</span> <Link href="mailto:info@nazaretty.ru">info@nazaretty.ru</Link>
                </p> */}
              </div>
            </div>
          </div>
          </div>
          <div className="row">

          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev1}
                  alt="Development Image"
                  // data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbDev2}
                  alt="Development Image"
                />
              </div>
            </div>
            </div>
          <div className="container">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <h2 className="sec-sub-title qual-text-head title-anim">МСК</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3">
                <div className="service__item-3 service_animation">
                  <h3>
                    <span className="service__title-3">
                      Экспострой <br />
                    </span>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Нахимовский проспект д. 8, стр. 6, павильон 235
                    </p>
                  </div>
                  <div className="service__btn-3">
                    <div className="">
                        <span className='colwh'>10:00 - 20:00</span>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <span className="service__title-3">
                      Экспострой <br />
                    </span>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Нахимовский проспект д. 8, стр. 6, павильон 235
                    </p>
                  </div>
                  <div className="service__btn-3">
                    <div className="">
                        <span className='colwh'>10:00 - 20:00</span>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <span className="service__title-3">
                      Экспострой <br />
                    </span>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Нахимовский проспект д. 8, стр. 6, павильон 235
                    </p>
                  </div>
                  <div className="service__btn-3">
                    <div className="">
                        <span className='colwh'>10:00 - 20:00</span>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <span className="service__title-3">
                      Экспострой <br />
                    </span>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Нахимовский проспект д. 8, стр. 6, павильон 235
                    </p>
                  </div>
                  <div className="service__btn-3">
                    <div className="">
                        <span className='colwh'>10:00 - 20:00</span>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div><div className="container">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <h2 className="sec-sub-title qual-text-head title-anim">РСТВ</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3">
                <div className="service__item-3 service_animation">
                  <h3>
                    <span className="service__title-3">
                      Экспострой <br />
                    </span>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Нахимовский проспект д. 8, стр. 6, павильон 235
                    </p>
                  </div>
                  <div className="service__btn-3">
                    <div className="">
                        <span className='colwh'>10:00 - 20:00</span>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                
                <div className="service__item-3 service_animation">
                  <h3>
                    <span className="service__title-3">
                      Экспострой <br />
                    </span>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Нахимовский проспект д. 8, стр. 6, павильон 235
                    </p>
                  </div>
                  <div className="service__btn-3">
                    <div className="">
                        <span className='colwh'>10:00 - 20:00</span>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="container">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <h2 className="sec-sub-title qual-text-head title-anim">ЕКБ</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3">
                <div className="service__item-3 service_animation">
                  <h3>
                    <span className="service__title-3">
                      Экспострой <br />
                    </span>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Нахимовский проспект д. 8, стр. 6, павильон 235
                    </p>
                  </div>
                  <div className="service__btn-3">
                    <div className="">
                        <span className='colwh'>10:00 - 20:00</span>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <span className="service__title-3">
                      Экспострой <br />
                    </span>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Нахимовский проспект д. 8, стр. 6, павильон 235
                    </p>
                  </div>
                  <div className="service__btn-3">
                    <div className="">
                        <span className='colwh'>10:00 - 20:00</span>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>
                <div className="service__item-3 service_animation">
                  <h3>
                    <span className="service__title-3">
                      Экспострой <br />
                    </span>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      Нахимовский проспект д. 8, стр. 6, павильон 235
                    </p>
                  </div>
                  <div className="service__btn-3">
                    <div className="">
                        <span className='colwh'>10:00 - 20:00</span>
                    </div>
                  </div>

                  <div
                    className="service__hover-3"
                    style={{
                      backgroundImage: "url(assets/imgs/service/3/1.jpg)",
                    }}
                  ></div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;
