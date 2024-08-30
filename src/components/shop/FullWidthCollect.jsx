// import { useEffect, useState, useReducer } from "react";
// import { Accordion } from "react-bootstrap";
// import CollectionCard from "../common/card/CollectionCard";
// import ColorFilter from "./filter/type1/ColorFilter";
// import BrandFilter from "./filter/type1/BrandFilter";
// import RatingFilter from "./filter/type1/RatingFilter";
// import SortFilter from "./filter/type1/SortFilter";
// import CategoryFilter from "./filter/type1/CategoryFilter";
// import PriceFilter from "./filter/type1/PriceFilter";
// import SortFilter2 from "./filter/type2/SortFilter2";
// import CategoryFilter2 from "./filter/type2/CategoryFilter2";
// import ColorFilter2 from "./filter/type2/ColorFilter2";
// import PriceFilter2 from "./filter/type2/PriceFilter2";
// import BrandFilter2 from "./filter/type2/BrandFilter2";
// import RatingFilter2 from "./filter/type2/RatingFilter2";
// import filterFunction from "@/lib/utils/filterFunction";

// const initialState = {
//   selectedCategory: [],
//   selectedColor: [],
//   selectedPrice: [],
//   selectedBrand: [],
//   selectedRating: [],
//   selectedSort: [],
//   showData: [],
//   showDataHistory: [],
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "setSelectedCategory":
//       return { ...state, selectedCategory: action.value };
//     case "setSelectedColor":
//       return { ...state, selectedColor: action.value };
//     case "setSelectedPrice":
//       return { ...state, selectedPrice: action.value };
//     case "setSelectedBrand":
//       return { ...state, selectedBrand: action.value };
//     case "setSelectedRating":
//       return { ...state, selectedRating: action.value };
//     case "setSelectedSort":
//       return { ...state, selectedSort: action.value };
//     case "setShowData":
//       return { ...state, showData: action.value };
//     case "setShowDataHistory":
//       return { ...state, showDataHistory: action.value };
//     default:
//       return state;
//   }
// };

// const FullWidthCollect = ({ allData, allFilter }) => {
//   const [open, setOpen] = useState("");
//   const [openMobile, setOpenMobile] = useState(false);
//   const [productFilter, dispatch] = useReducer(reducer, initialState);

//   const {
//     selectedColor,
//     selectedPrice,
//     selectedBrand,
//     selectedRating,
//     selectedSort,
//     showData,
//     showDataHistory,
//     selectedCategory,
//   } = productFilter;

//   const filterAll = () => {
//     dispatch({
//       type: "setShowData",
//       value: filterFunction(
//         allData,
//         selectedColor,
//         selectedBrand,
//         selectedRating,
//         selectedSort,
//         selectedPrice,
//         selectedCategory
//       ),
//     });
//     dispatch({
//       type: "setShowDataHistory",
//       value: filterFunction(
//         allData,
//         selectedColor,
//         selectedBrand,
//         selectedRating,
//         selectedSort,
//         selectedPrice,
//         selectedCategory
//       ),
//     });
//   };
//   useEffect(() => {
//     dispatch({
//       type: "setShowData",
//       value: allData,
//     });
//     dispatch({
//       type: "setShowDataHistory",
//       value: allData,
//     });
//   }, [allData]);

//   const searchFilter = (e) => {
//     const searchData = e.target.value.toLowerCase();
//     if (searchData) {
//       let filter = showData.filter((el) =>
//         el.title.toLowerCase().includes(searchData)
//       );
//       dispatch({
//         type: "setShowData",
//         value: filter,
//       });
//     } else {
//       dispatch({
//         type: "setShowData",
//         value: showDataHistory,
//       });
//     }
//   };

//   return (
//     <>
//       <div className="woocomerce__filtering woocomerce-padding">
//         {/* shop inner */}
//         <div className="woocomerce__shopinner wc_feature_products">
//           <div className="woocomerce__feature-wrapper woocomerce__allcoll filteringwrapper">
//             {showData && showData.length ? (
//               showData.map((el) => <CollectionCard el={el} key={el.id} />)
//             ) : (
//               <p>Товар не найден</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FullWidthCollect;





import { useEffect, useState, useReducer } from "react";
import { Accordion } from "react-bootstrap";
import CollectionCard from "../common/card/CollectionCard";
import ColorFilter from "./filter/type1/ColorFilter";
import CollectionsFilter from "./filter/type1/CollectionsFilter";
import RatingFilter from "./filter/type1/RatingFilter";
import SortFilter from "./filter/type1/SortFilter";
import CategoryFilter from "./filter/type1/CategoryFilter";
import PriceFilter from "./filter/type1/PriceFilter";
import SortFilter2 from "./filter/type2/SortFilter2";
import CategoryFilter2 from "./filter/type2/CategoryFilter2";
import ColorFilter2 from "./filter/type2/ColorFilter2";
import PriceFilter2 from "./filter/type2/PriceFilter2";
import CollectionsFilter2 from "./filter/type2/CollectionsFilter2";
import RatingFilter2 from "./filter/type2/RatingFilter2";
import filterFunction from "@/lib/utils/filterFunction";

const initialState = {
  selectedCategory: [],
  selectedColor: [],
  selectedPrice: [],
  selectedCollections: [],
  selectedRating: [],
  selectedSort: [],
  showData: [],
  showDataHistory: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setSelectedCategory":
      return { ...state, selectedCategory: action.value };
    case "setSelectedColor":
      return { ...state, selectedColor: action.value };
    case "setSelectedPrice":
      return { ...state, selectedPrice: action.value };
    case "setSelectedCollections":
      return { ...state, selectedCollections: action.value };
    case "setSelectedRating":
      return { ...state, selectedRating: action.value };
    case "setSelectedSort":
      return { ...state, selectedSort: action.value };
    case "setShowData":
      return { ...state, showData: action.value };
    case "setShowDataHistory":
      return { ...state, showDataHistory: action.value };
    default:
      return state;
  }
};

const FullWidthCollect = ({ allData, allFilter }) => {
  const [open, setOpen] = useState("");
  const [openMobile, setOpenMobile] = useState(false);
  const [productFilter, dispatch] = useReducer(reducer, initialState);

  const {
    selectedColor,
    selectedPrice,
    selectedCollections,
    selectedRating,
    selectedSort,
    showData,
    showDataHistory,
    selectedCategory,
  } = productFilter;

  const filterAll = () => {
    dispatch({
      type: "setShowData",
      value: filterFunction(
        allData,
        selectedColor,
        selectedCollections,
        selectedRating,
        selectedSort,
        selectedPrice,
        selectedCategory
      ),
    });
    dispatch({
      type: "setShowDataHistory",
      value: filterFunction(
        allData,
        selectedColor,
        selectedCollections,
        selectedRating,
        selectedSort,
        selectedPrice,
        selectedCategory
      ),
    });
  };
  useEffect(() => {
    dispatch({
      type: "setShowData",
      value: allData,
    });
    dispatch({
      type: "setShowDataHistory",
      value: allData,
    });
  }, [allData]);

  const searchFilter = (e) => {
    const searchData = e.target.value.toLowerCase();
    if (searchData) {
      let filter = showData.filter((el) =>
        el.title.toLowerCase().includes(searchData)
      );
      dispatch({
        type: "setShowData",
        value: filter,
      });
    } else {
      dispatch({
        type: "setShowData",
        value: showDataHistory,
      });
    }
  };

  return (
    <>
      <div className="woocomerce__filtering woocomerce-padding">
        {/* shop inner */}
        <div className="woocomerce__shopinner wc_feature_products">
          <div className="woocomerce__feature-wrapper woocomerce__allcoll filteringwrapper">
            {showData && showData.length ? (
              showData.map((el) => <CollectionCard el={el} key={el.id} />)
            ) : (
              <p>Товар не найден</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FullWidthCollect;
