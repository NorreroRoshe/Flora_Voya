import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import Contact3 from './Contact-env/Contact3';

const Contact31 = ({ contact }) => {
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
        <div className="container g-0 pt-80 pb-0 sdbht">
          <div className="row" style={{justifyContent: 'center'}}>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 sdbht_saaw" style={{width: '60%'}}>
              <div className="sec-title-wrapper">
                <h2 className="pf-title fzdvaas" style={{fontSize: '50px'}}>Свяжитесь с нами</h2>
              </div>
            </div>
          </div>
          <div className="row contact__btm" style={{justifyContent: 'center'}}>
            <Contact3 />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact31;