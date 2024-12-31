import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import Image from "next/image";
import { Preloader, Contact31 } from "@/components";
import asadsa from '../../../public/assets/imgs/home-7/gr25.jpg';
import useSWR from "swr";

gsap.registerPlugin(ScrollTrigger);


const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ModernAgencyPortfolio = () => {



  useEffect(() => {
    if (typeof window !== "undefined") {
      const hover_title = document.querySelectorAll(".hover_wrap");

      if (hover_title) {
        function hoverImgFunc(event, hover_title) {
          const contentBox = hover_title.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          hover_title.children[0].style.transform = `translate(${dx}px, ${dy}px)`;
        }

        hover_title.forEach((item, i) => {
          item.addEventListener("mousemove", (event) => {
            setInterval(hoverImgFunc(event, item), 1000);
          });
        });
      }
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_2");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_2", {
            scrollTrigger: {
              trigger: ".fade_bottom_2",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);

  

  const { data, error } = useSWR("assets/json/contact.json", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        {/* <Preloader /> */}
      </div>
  );
 
  const contact = data.contact;


  return (
    <>
      <div className="sp-x pt-100 pb-100">
        {/* <h6 className="text-end about-sub-right">О компании</h6>
        <div className="section_wrapper b-100">
          <h4 className="react_border">
            <span>02</span>
          </h4>
        </div> */}
        <div className="row justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <Image
            priority
            style={{width: '100%', height: '100%'}}
            src={asadsa}
            className='dny'
            alt="Image"
          />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <Contact31 contact={contact} />
              {/* <div className="about8__content fade_bottom_2">
                <p>
                  {" "}
                  Nazaretty – ведущий производитель интерьерного освещения основанная в 2017 году. Мы создаем не просто освещение, а уникальные световые решения, придавая вашему пространству неповторимый стиль и изысканность. Наша фабрика находится в Москве, где наши мастера творят уникальные изделия в ручную, воплощая самые смелые идеи в реальность. Наше яркое понимание трендов и страсть к красоте проявляются в каждой детали, делая наши проекты по-настоящему впечатляющими. Мы любим с светильники и производство для нас это нечто большее, чем просто работа.
                </p>
                <Link href="/about" className="blog__btn about_btn">
                  Подробнее{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernAgencyPortfolio;
