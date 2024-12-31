import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/about/award.png";
import Image from "next/image.js";
import Detail1 from "../../../public/assets/imgs/portfolio/detail/sds.jpg";

const AboutStandardsHero = () => {
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
      <section className="hero__about">
        <div className="container g-0">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title hero-title-stand">
                  Кто <strong>мы</strong>
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                  </div>
                  <div className="hero__about-text hero__qual1-text">
                    <p>
                      {/* {
                        "Производство светильников и других изделий Nazaretty - процесс сложный, и трудоемкий."
                      } */}
                    </p>
                  </div>
                  <div className="hero__qual2-text">
                    <p style={{color: '#000'}}>
                      {
                        // "Принцып - иднивидуальный подход к созданию каждой модели и каждой коллекции светильников, позволяют воссоздать изящные и уникальные светильники, которые будут служить вам и украшать ваш интерьер не один год."
                        "Встречайте VOYA-NR. Мы гораздо больше, чем просто служба доставки цветов. Рожденная из необходимости предоставить клиентам по всему миру самые лучшие сорта сезонных цветов, мы предлагаем нотку цветочной роскоши в любом случае, будь то особенный день или повседневный. Всегда высочайшего качества, всегда получены и отправлены экологически безопасным способом, и всегда исключительны. Это путь VOYA-NR."
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

export default AboutStandardsHero;
