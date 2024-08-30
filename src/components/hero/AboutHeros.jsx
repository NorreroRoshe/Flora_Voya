import React, { useEffect } from "react";
import { gsap } from "gsap";
import Solution from "../../../public/assets/imgs/thumb/thumb536.jpg";
import Solution2 from "../../../public/assets/imgs/thumb/solution-2.png";
import Solution3 from "../../../public/assets/imgs/thumb/solution-3.png";
import Icon1 from "../../../public/assets/imgs/icon/1.png";
import Icon2 from "../../../public/assets/imgs/icon/2.png";
import Icon3 from "../../../public/assets/imgs/icon/3.png";
import Icon4 from "../../../public/assets/imgs/icon/4.png";
import Icon5 from "../../../public/assets/imgs/icon/5.png";
import Image from "next/image";

const AboutHeros = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let image_list = [".solution__wrapper img"];
      imageMoving(".solution__area", image_list);
    }
  }, []);

  function imageMoving(wrapper, image_list) {
    let container = document.querySelector(wrapper);
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {
          var x = e.clientX;
          var y = e.clientY;
          let viewportWidth = window.innerWidth;
          let center = viewportWidth / 2;
          let centerHeight = innerHeight / 2;

          let tHero = gsap.context(() => {
            if (x > center) {
              gsap.to(image_list, {
                x: 15,
                duration: 5,
                ease: "power4.out",
              });
            } else {
              gsap.to(image_list, {
                x: -15,
                duration: 5,
                ease: "power4.out",
              });
            }
            if (y > centerHeight) {
              gsap.to(image_list, {
                y: 15,
                duration: 5,
                ease: "power4.out",
              });
            } else {
              gsap.to(image_list, {
                y: -15,
                duration: 5,
                ease: "power4.out",
              });
            }
          });
          return () => tHero.revert();
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <section className="solution__area">
        <div className="container hero-line"></div>
        <div className="solution__wrapper pb-100">

          <div className="solution__mid pt-120 sdfhw">
            <h1 className="solution__title animation__char_come sasd">
              О нас
            </h1>
            <p className='echdn'>
              VOYA NOVAYA RIGA
            </p>
          </div>

          <div className="solution__right">
            <div className="solution__img-3">
              <Image
                priority
                style={{ height: "auto" }}
                src={Solution}
                alt="Solution Image"
                className='solimgtri'
              />
            </div>
          </div>
        </div>

        <div className="container pb-130">
          <div className="row">
            <div className="col-xxl-12">
              <div className="solution__btm">
                <ul>
                  <li>Индивидуальность</li>
                  <li>Качество</li>
                  <li>Ручная сборка</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="solution__shape">
          <Image
            priority
            width={41}
            style={{ height: "auto" }}
            src={Icon1}
            alt="Shape Image"
            className="shape-1"
          />
          <Image
            priority
            width={22}
            style={{ height: "auto" }}
            src={Icon2}
            alt="Shape Image"
            className="shape-2"
          />
          <Image
            priority
            width={38}
            style={{ height: "auto" }}
            src={Icon3}
            alt="Shape Image"
            className="shape-3"
          />
          <Image
            priority
            width={62}
            style={{ height: "auto" }}
            src={Icon4}
            alt="Shape Image"
            className="shape-4"
          />
          <Image
            priority
            width={94}
            style={{ height: "auto" }}
            src={Icon5}
            alt="Shape Image"
            className="shape-5"
          />
        </div>
      </section>
    </>
  );
};

export default AboutHeros;
