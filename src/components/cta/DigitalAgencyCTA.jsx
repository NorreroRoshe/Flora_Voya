import Link from "next/link";
import React from "react";

const DigitalAgencyCTA = () => {
  return (
    <>
      <section className="cta__area">
        <div className="container line pb-110">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                {/* <p className="cta__sub-title">Work with us</p> */}
                <h2 className="cta__title title-anim">
                  Хотите сотрудничать ?
                </h2>
                <div className="btn_wrapperok">
                  <Link
                    href="/contact"
                    className="btn-hover btn-bbb btn-item"
                  >
                    <span></span>Связаться{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyCTA;
