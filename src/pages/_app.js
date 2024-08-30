import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/scss/master.scss";
import "@/styles/extra.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { config } from "@fortawesome/fontawesome-svg-core";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { useReducer } from "react";
import AppContext from "@/components/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
config.autoAddCss = false;

const initialState = {
  cartData: [],
  totalCost: 0,
  orderProduct: [],
  allWishList: [],
  activeWishList: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setCartData":
      return { ...state, cartData: action.value };
    case "setTotalCost":
      return { ...state, totalCost: action.value };
    case "setOrderProduct":
      return { ...state, orderProduct: action.value };
    case "setAllWishList":
      return { ...state, allWishList: action.value };
    case "setActiveWishList":
      return { ...state, activeWishList: action.value };
    default:
      return state;
  }
};

export default function App({ Component, pageProps }) {

  const [rootState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        rootState,
        dispatch,
      }}
    >
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AppContext.Provider>
  );
}
