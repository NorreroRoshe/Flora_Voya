import React from "react";

const StartupAgencySolution1 = ({collData1}) => {
  return (
    <>
      <section className="solution__area-4 solution__area-5 h-310"
        style={{backgroundImage: `url(${collData1.image.src})`}}
        >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-6 col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
              <div className="solution__content db">
                <h2 className="sec-subtile-6 sec-subtile-67">{collData1.title}</h2>
                <h3 className="sec-title-6 sec-title-67 title-anim">{collData1.subtitle}</h3>
                <ul className="solution__list title-anim">
                  <li>{collData1.description}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="solution__content mw-80">
                <h2 className="sec-subtile-6 sec-subtile-67 sec-su885">{collData1.title}</h2>
                <h3 className="sec-title-6 sec-title-67 title-anim sec-su886">{collData1.subtitle}</h3>
                <ul className="solution__list title-anim">
                  <li>{collData1.description}</li>
                </ul>
              </div>
    </>
  );
};

export default StartupAgencySolution1;