import {
  CommonAnimation,
  CursorAnimation,
  Switcher,
  ScrollTop,
  ScrollSmootherComponents,
  Header,
  StartupAgencyFooter,
} from "@/components";

const ProductLayout = ({ children, white }) => {
  return (
    <>
      <CommonAnimation>
        <div className="has-smooth" id="has_smooth"></div>
        <ScrollSmootherComponents />
        {/* <CursorAnimation /> */}
        {/* <Switcher /> */}
        <ScrollTop />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header option={white ? white : "black"} />
            {children}
            <StartupAgencyFooter />
          </div>
        </div>
      </CommonAnimation>
    </>
  );
};

export default ProductLayout;
