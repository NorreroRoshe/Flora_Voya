import React from "react";

const StartupAgencySolution = ({collData}) => {
  return (
    <>
      <section className="solution__area-4 solution__area-6 mt-60 mb-60 db"
        style={{backgroundImage: `url(${collData.image.src})`}}
        >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 xxl-6 col-xl-6 xl-6 col-lg-6 lg-6 col-md-6 md-6">
              <div className="solution__content">
                <h2 className="sec-subtile-6">{collData.title}</h2>
                <h3 className="sec-title-6 title-anim">
                  {collData.subtitle}
                </h3>
                <ul className="solution__list title-anim">
                  <li>
                    {collData.description}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencySolution;