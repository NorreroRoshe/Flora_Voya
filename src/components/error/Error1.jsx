import Link from "next/link";
import Image from "next/image";
import Thumb404 from "../../../public/assets/imgs/thumb/404.png";

const Error1 = () => {
  return (
    <>
      <section className="error__page">
        <div className="container line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="error__content">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={Thumb404}
                  alt="Page not found"
                />
                <h2>Извините! страница не найдена</h2>
                <p>
                  {
                    "Страница, которую вы ищете, не существует или была перемещена"
                  }
                </p>
                <div className="btn_wrapper">
                  <Link href="/" className="wc-btn-primary btn-hover btn-item">
                    <span></span> Назад на <br />
                    главную <i className="fa-solid fa-arrow-right"></i>
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

export default Error1;
