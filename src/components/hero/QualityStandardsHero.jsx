import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/about/award.png";
import Image from "next/image.js";
import Detail1 from "../../../public/assets/imgs/portfolio/detail/1.jpg";

const QualityStandardsHero = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let word_come = document.querySelectorAll(".animation__word_come");
        word_come.forEach((word_come) => {
          let split_word_come = new SplitText(word_come, {
            type: "chars words",
            position: "absolute",
          });
          gsap.from(split_word_come.words, {
            duration: 1,
            x: 50,
            autoAlpha: 0,
            stagger: 0.05,
          });
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="hero__about pt-100 pb-100">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title hero-title-stand animation__word_come">
                  Материалы, качество и стандарты <strong>NAZaretty</strong>
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    {/* <div className="btn_wrapper">
                      <Link
                        href="/service"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Trends & <br />
                        technology
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div> */}
                  </div>
                  <div className="hero__about-text hero__qual1-text title-anim">
                    <p>
                      {
                        "Производство светильников и других изделий Nazaretty - процесс сложный, и трудоемкий."
                      }
                    </p>
                  </div>
                  <div className="hero__about-text hero__qual2-text title-anim">
                    <p>
                      {
                        // "Принцып - иднивидуальный подход к созданию каждой модели и каждой коллекции светильников, позволяют воссоздать изящные и уникальные светильники, которые будут служить вам и украшать ваш интерьер не один год."
                        "Наш принцип - индивидуальный подход к созданию каждой модели и каждой коллекции светильников, позволяет воплотить изысканные и уникальные светильники, которые будут служить вам и украшать ваш интерьер на протяжении многих лет."
                      }
                    </p>
                  </div>
                  {/* <div className="hero__about-award">
                    <Image
                      priority
                      width={126}
                      height={82}
                      src={Award}
                      alt="Best Studio Award"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row hero__about-row">
            <div className="col-xxl-12">
              <div className="hero__about-video">
                <video loop muted autoPlay playsInline>
                  <source src="assets/video/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div> */}
          <div className="row hero__about-row">
            <div className="col-xxl-12 portfolio__detail-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail1}
                alt="Portfolio Thumbnail"
                data-speed="auto"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default QualityStandardsHero;
