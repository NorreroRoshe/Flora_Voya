import Link from "next/link";

const FaqCTA = () => {
  return (
    <>
      <section className="faq__btm">
        <div className="container line pb-130">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                  Все еще остались вопросы ?
                </h2>
                <p className="sub-title-anim">
                  Мы готовы ответить на них!
                </p>
                <div className="btn_wrapper">
                  <Link
                    href="Contacts"
                    className="wc-btn-primary btn-hover btn-item"
                  >
                    <span></span>Свяжитесь с нами{" "}
                    {/* <i className="fa-solid fa-arrow-right"></i> */}
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

export default FaqCTA;
