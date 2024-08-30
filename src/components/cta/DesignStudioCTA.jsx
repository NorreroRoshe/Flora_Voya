import Link from "next/link";
import React from "react";

const DesignStudioCTA = () => {
  return (
    <>
      <section className="cta__area-2">
        <div className="container line pt-130 pb-120">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content-2">
                <p className="cta__sub-title-2 title-anim">
                  Сотрудничество
                </p>
                <h2 className="cta__title-2 title-anim">
                  Бренд <strong>Nazaretty</strong> приглашает к сотрудничеству дизайнеров и дилеров
                </h2>
                <div className="btn_divi">
                  <div className="btn_wrapper">
                    <Link
                      href="/for-designers"
                      className="wc-btn-pink btn-hover btn-item"
                    >
                      <i className="fa-solid fa-arrow-left"></i><span></span> &nbsp; Дизайнерам
                    </Link>
                  </div>
                  <div className="btn_wrapper">
                    <Link
                      href="/for-retails"
                      className="wc-btn-pink btn-hover btn-item"
                    >
                      <span></span>Дилерами<i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignStudioCTA;
