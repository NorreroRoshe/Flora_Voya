import React from "react";
import Detail4 from "../../../public/assets/imgs/portfolio/detail/4.jpg";
import Detail5 from "../../../public/assets/imgs/portfolio/detail/5.gif";
import Detail3 from "../../../public/assets/imgs/portfolio/detail/3.jpg";
import Image from "next/image";

const QualStory = () => {
  return (
    <>
      <section className="story__area" style={{paddingBottom: '60px'}}>
        <div className="container g-0">
          <div className="sec-title-wrapper">

            <div className="row wjcsb">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <h2 className="sec-sub-title qual-text-head title-anim">ЧТО МЫ ДЕЛАЕМ</h2>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="story__text">
                  <p>
                    VOYA-NR — это не просто цветы, мы постоянно развиваемся, и стараемся отвечать потребностям тех, кто живет жизнью в цветах. Хотя мы по своей сути являемся экспертами по цветам, мы знаем, что идеальные стебли — это только начало, поэтому мы также предлагаем тщательно подобранный ассортимент предметов первой необходимости для образа жизни: от растений до свечей, от ваз до ароматов.
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className="block-gallery pt-30">
              <Image
                priority
                style={{ width: "800px", height: "auto" }}
                src={Detail3}
                alt="Portfolio Image"
                className='img_mw-100'
              />
            </div>
        </div>
        <div className="container g-0">
          <div className="sec-title-wrapper">
            <div className="row wjcsb">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <h2 className="sec-sub-title qual-text-head title-anim">ПЛАНЕТА VOYA</h2>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="story__text">
                  <p>
                    Как эксперты касаемо цветов, мы хотим поделиться с вами нашими ноу-хау. От нас вы можете ожидать всего: от простых решений по стилизации стеблей до советов экспертов по уходу, которые помогут вашим цветам выглядеть наилучшим образом еще дольше, а также нашей тщательно подобранной редакции практических руководств, профилей цветов и многого другого.
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className="block-gallery pt-30">
              <Image
                priority
                style={{ width: "800px", height: "auto" }}
                src={Detail4}
                alt="Portfolio Image"
                className='img_mw-100'
              />
            </div>
        </div>
        <div className="container g-0">
          <div className="sec-title-wrapper">
            <div className="row wjcsb">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <h2 className="sec-sub-title qual-text-head title-anim afegrbsv">ЛУЧШИЕ СТЕБЛИ&nbsp;СЕЗОНА. КРУГЛЫЙ ГОД.</h2>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="story__text">
                  <p>
                    Если вам нужны сезонные цветы, которые никогда не выходят из моды, вы находитесь в нужном месте. У нас вы можете приобрести наш постоянно расширяющийся ассортимент высококачественных цветов, выращенных экологически безопасным способом, которые обещают объединить уникально выбранные сорта с теми, которые вы уже знаете и обожаете. Ощущение «нового цветка» каждый раз.
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className="block-gallery pt-30">
              <Image
                priority
                style={{ width: "800px", height: "auto" }}
                src={Detail5}
                alt="Portfolio Image"
                className='img_mw-100'
              />
            </div>
        </div>
      </section>
    </>
  );
};

export default QualStory;
