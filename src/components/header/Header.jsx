import { useContext, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Canvas from "../canvas/Canvas";

import Logo from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import Bar from "../../../public/assets/imgs/woocomerce/bar.png";
import BarBlack from "../../../public/assets/imgs/woocomerce/bar-b.png";

import AppContext from "../AppContext";
import HeaderSearch from "../search/HeaderSearch";
import useSWR from "swr";
import { Preloader } from "..";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = ({ option }) => {
  const context = useContext(AppContext);
  const [totalCount, setTotalCount] = useState(0);

  const ofCanvasArea = useRef();
  const menuAnim = useRef();

  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    } else {
      setTimeout(() => {
        menuAnimation();
      }, 1000);
    }
  }, []);

  const calculateTotalPrice = () => {
    if (typeof window !== "undefined") { // Проверяем, что код выполняется на клиенте
      const cartData = JSON.parse(localStorage.getItem('cart')) || [];
      if (cartData.length > 0) {
        const totalCountQ = cartData.reduce((sum, item) => {
          return sum + item.quantity;
        }, 0);
        setTotalCount(totalCountQ);
      } else {
        setTotalCount(0);
      }
    }
  };
  
  useEffect(() => {
    calculateTotalPrice(); // Initial calculation

    const intervalId = setInterval(() => {
      calculateTotalPrice(); // Periodically check for changes
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  
  const menuAnimation = () => {
    let rootParent = menuAnim.current?.children;
    for (let i = 0; i < rootParent?.length; i++) {
      let firstParent = rootParent[i].children;
      firstParent[0].innerHTML =
        '<div class="menu-text"><span>' +
        firstParent[0].textContent.split("").join("</span><span>") +
        "</span></div>";
    }
  };

  const openCanvas = () => {
    ofCanvasArea.current.style.opacity = "1";
    ofCanvasArea.current.style.visibility = "visible";
  };

  const { data: allProducts, error } = useSWR(
    "../assets/json/allProducts.json",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!allProducts)
    return (
      <div>
        <Preloader />
      </div>
    );

  const allData = allProducts.products;

  return (
    <>
    <div className="woocomerce__header-center" style={{background: '#000'}}>
      <div className="header__nav-2">
        <ul
          className={`${
            option == "black"
              ? "main-menu-3 menu-anim woocomerce-menu"
              : "main-menu-3 menu-anim"
          } egwbefvwdca`}
          ref={menuAnim}
        >
          {/* <li>
            <Link className='uphead' href={"/goods-category"}>каталог</Link>
          </li> */}
          <li className="ascqewad">
            <Link className='uphead' href={"/About-us"}>компания</Link>
          </li>
          <li className="ascqewad">
            <Link className='uphead' href={"/Contacts"}>Контакты</Link>
          </li>
          <li className="ascqewad">
            <Link className='uphead' href={"/delivery"}>доставка</Link>
          </li>
          <li className="ascqewad">
            <Link className='uphead' href={"/flowers-by-color"}>#Цветы по цветам</Link>
          </li>

        </ul>
      </div>
    </div>
      <header
        className={`${
          option == "black"
            ? "woocomerce__header"
            : "woocomerce__header absolute-header"
        }`}
      >
          <div className="woocomerce__header-center jcsbtsa">
            <div onClick={openCanvas} className="woocomerce__header-search dndb">
              <Image
                priority
                width={45}
                style={{ height: "auto", width: "auto" }}
                src={option == "black" ? BarBlack : Bar}
                alt="Menu"
                className="woocomerce__offcanvas"
                id="open_offcanvas"
              />
            </div>
            <div className="woocomerce__header-logo">
              <Link href={"/"}>
                <Image
                  priority
                  width={option == "black" ? 190 : 170}
                  height={option == "black" ? 62 : 62}
                  style={{ height: "62px" }}
                  src={option == "black" ? LogoBlack : Logo}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="woocomerce__header-cartwrapper dndb">
                <Link href={"/cart"}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  {/* <p>Cart</p> */}
                  <span>({totalCount})</span>
                </Link>
              </div>
          </div>
        <div className="woocomerce__header-inner shopfull">
          <div className="woocomerce__header-left">
            <div className="header__nav-2">
              <ul
                className={`${
                  option == "black"
                    ? "main-menu-3 menu-anim woocomerce-menu"
                    : "main-menu-3 menu-anim"
                }`}
                ref={menuAnim}
              >
                <li className="has-megamenu" style={{zIndex: 2, position: 'relative', paddingLeft: 0}}>
                  <Link href="/category/Цветы">Цветы</Link>
                  <ul className="mega-menu-2 menu-head" style={{left: '627%'}}>
                    <li>
                      <span style={{color: 'white', fontSize: '19px', padding: '10px', textDecoration: 'underline', cursor: 'default'}} href=''>Категории</span>  
                      <ul>
                        <li>
                          <Link href={"/category/Цветы"}>Все цветы</Link>
                        </li>
                        <li>
                          <Link href={"/bouquets/букеты"}>Все букеты</Link>
                        </li>
                        <li>
                          <Link href={"/feature/superbouquets"}>Супер букеты</Link>
                        </li>
                        <li>
                          <Link href={"/feature/featured"}>Популярные цветы</Link>
                        </li>
                        {/* <li>
                          <Link href={"/sbuscript-by-voya"}>Подписка на цветы</Link>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <span style={{color: 'white', fontSize: '19px', padding: '10px', textDecoration: 'underline', cursor: 'default'}} href=''>По виду</span> 
                      <ul>
                        <li>
                          <Link href={"/collections/Розы"}>Розы</Link>
                        </li>
                        <li>
                          <Link href={"/collections/Тюльпаны"}>Тюльпаны</Link>
                        </li>
                        <li>
                          <Link href={"/collections/Орхидеи"}>Орхидеи</Link>
                        </li>
                        <li>
                          <Link href={"/collections/Ранункулюсы"}>Итальянский ранункулюс</Link>
                        </li>
                        <li>
                          <Link href={"/flowers-by-category"}>Цветочное разнообразие</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span style={{color: 'white', fontSize: '19px', padding: '10px', textDecoration: 'underline', cursor: 'default'}} href=''>По цвету</span>  
                      <ul>
                        <li>
                          <Link href={"/color/красный"}>Красные цветы</Link>
                        </li>
                        <li>
                          <Link href={"/color/белый"}>Белые цветы</Link>
                        </li>
                        <li>
                          <Link href={"/color/розовый"}>Розовые цветы</Link>
                        </li>
                        <li>
                          <Link href={"/color/фиолетовый"}>Фиолетовые цветы</Link>
                        </li>
                        <li>
                          <Link href={"/color/черный"}>Черные цветы</Link>
                        </li>
                        <li>
                          <Link href={"/flowers-by-color"}>Все цвета</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <Link href={"/delivery/доставим сегодня"}>Экспресс-доставка</Link>
                  <ul className="main-dropdown">
                    <li>
                      <Link href={"/delivery/доставим сегодня"}>Доставка сегодня</Link>
                    </li>
                    <li>
                      <Link href={"/delivery/доставим завтра"}>Доставка завтра</Link>
                    </li>
                  </ul>
                </li>
                <li style={{zIndex: 2}}>
                  <Link href={"/vazi/Денежные букеты"}>Денежные &nbsp; &nbsp; букеты</Link>
                  {/* <ul className="mega-menu-2 menu-head" style={{left: '90px', width: '500px', display: 'flex', justifyContent: 'space-between'}}>
                    <li>
                      <span style={{color: 'white', fontSize: '19px', padding: '10px', textDecoration: 'underline', cursor: 'default'}} href=''>Категории</span> 
                      <ul>
                        <li>
                          <Link href={"/cart"}>Все букеты</Link>
                        </li>
                        <li>
                          <Link href={"/checkout"}>Супер букеты</Link>
                        </li>
                        <li>
                          <Link href={"/sign-up"}>Популярные цветы</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span style={{color: 'white', fontSize: '19px', padding: '10px', textDecoration: 'underline', cursor: 'default'}} href=''>По размеру</span> 
                      <ul>
                        <li>
                          <Link href={"/cart"}>15 купюр</Link>
                        </li>
                        <li>
                          <Link href={"/checkout"}>30 купюр</Link>
                        </li>
                        <li>
                          <Link href={"/sign-up"}>50 купюр</Link>
                        </li>
                        <li>
                          <Link href={"/sign-up"}>100 купюр</Link>
                        </li>
                        <li>
                          <Link href={"/sign-up"}>150 купюр</Link>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                </li>
                <li style={{zIndex: 2}}>
                  <Link href={"/flowers-by-category"}>Цветочное &nbsp; &nbsp; разнообразие</Link>
                </li>
                <li style={{zIndex: 2}}>
                  <Link href={"/bouquets/букеты"}>Все &nbsp; &nbsp; букеты</Link>
                </li>
                {/* <li className="has-megamenu" style={Денежные букеты{zIndex: 2, position: 'relative'}}>
                  <Link href="/vazi/Вазы и Кашпо">Вазы &nbsp;& &nbsp;кашпо</Link>
                  <ul className="main-dropdown">
                    <li>
                      <Link href={"/collections/Вазы"}>Все вазы</Link>
                    </li>
                    <li>
                      <Link href={"/collections/Кашпо"}>Все кашпо</Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li>
                  <Link href={"/vazi/Аксессуары и подарки"}>Аксессуары&nbsp;& &nbsp;Подарки</Link>
                </li>*/}
                <li>
                  <Link style={{color: 'red'}} href={"/shop/side-bar"}>Все&nbsp; товары</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${
              option == "black"
                ? "woocomerce__header-right"
                : "woocomerce__header-right home"
            }`}
          >
            <div className="woocomerce__header-cart dfdn">
              <div className="woocomerce__header-cartwrapper">
                <Link href={"/cart"}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  {/* <p>Cart</p> */}
                  <span>
                    {/* ({context.rootState.cartData.length}) */}
                    ({totalCount})
                    </span>
                </Link>
              </div>
              {/* <div className="woocomerce__header-user">
                <Link href={"/profile"}>
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>
              <div className="woocomerce__header-search">
                <HeaderSearch allData={allData} />
              </div> */}
              <div onClick={openCanvas} className="woocomerce__header-search dn">
                <Image
                  priority
                  width={45}
                  style={{ height: "auto" }}
                  src={option == "black" ? BarBlack : Bar}
                  alt="Menu"
                  className="woocomerce__offcanvas"
                  id="open_offcanvas"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Canvas ofCanvasArea={ofCanvasArea} />
    </>
  );
};

export default Header;
