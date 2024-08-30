import Link from "next/link";
import React from "react";

const DigitalAgencyDesCTA = () => {
  return (
    <>
      <section className="cta__area pt-100">
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
                    href="/Contacts"
                    className="btn-hover btn-bbb whcoco btn-item"
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

export default DigitalAgencyDesCTA;
