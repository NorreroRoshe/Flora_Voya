import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Contact2 from './Contact-env/Contact2';

const Contact1Zakaz = ({ contact }) => {
  const animationWordCome = useRef();
  const animationCharCome = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let char_come = animationCharCome.current;
        let split_char = new SplitText(char_come, { type: "chars, words" });
        gsap.from(split_char.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.05,
        });
        let word_come = animationWordCome.current;
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
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 pb-110">
          {/* <span className="line-3"></span> */}
          <div className="row pt-80" style={{justifyContent: 'center'}}>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="pf-title sec-title-2"> Оформить заказ</h2>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              
            </div>
            <Contact2 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1Zakaz;