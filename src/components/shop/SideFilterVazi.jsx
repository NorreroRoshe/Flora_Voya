import { useEffect, useReducer, useState } from "react";
import ProductCard from "../common/card/ProductCard";
import { Accordion } from "react-bootstrap";
import SortFilter2 from "./filter/type2/SortFilter2";
import CategoryFilter2 from "./filter/type2/CategoryFilter2";
import ColorFilter2 from "./filter/type2/ColorFilter2";
import PriceFilter2 from "./filter/type2/PriceFilter2";
import CollectionsFilter2 from "./filter/type2/CollectionsFilter2";
import PovodFilter2 from "./filter/type2/PovodFilter2";
import RatingFilter2 from "./filter/type2/RatingFilter2";
import filterFunction from "@/lib/utils/filterFunction";
import DeliveryFilter2 from "./filter/type2/DeliveryFilter2";


const initialState = {
  selectedCategory: [],
  selectedPovod: [],
  selectedColor: [],
  // selectedDelivery: [],
  selectedPrice: [],
  selectedCollections: [],
  selectedRating: [],
  selectedSort: [],
  showData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setSelectedCategory":
      return { ...state, selectedCategory: action.value };
    case "setSelectedPovod":
      return { ...state, selectedPovod: action.value };
    case "setSelectedColor":
      return { ...state, selectedColor: action.value };
    case "setSelectedPrice":
      return { ...state, selectedPrice: action.value };
    case "setSelectedCollections":
      return { ...state, selectedCollections: action.value };
    case "setSelectedRating":
      return { ...state, selectedRating: action.value };
    case "setSelectedDelivery":
      //   return { ...state, selectedDelivery: action.value };
      // case "setSelectedSort":
      return { ...state, selectedSort: action.value };
    case "setShowData":
      return { ...state, showData: action.value };
    default:
      return state;
  }
};

const SideFilter = ({ allData, allFilter }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [productFilter, dispatch] = useReducer(reducer, initialState);

  const {
    selectedColor,
    selectedPrice,
    selectedCollections,
    selectedPovod,
    selectedRating,
    selectedSort,
    // selectedDelivery,
    showData,
    selectedCategory,
  } = productFilter;

  console.log(productFilter, 'productFilter')

  const filterAll = () => {
    dispatch({
      type: "setShowData",
      value: filterFunction(
        allData,
        selectedColor,
        selectedCollections,
        selectedPovod,
        selectedRating,
        selectedSort,
        selectedPrice,
        // selectedDelivery,
        selectedCategory
      ),
    });
  };
  useEffect(() => {
    dispatch({
      type: "setShowData",
      value: allData,
    });
  }, [allData]);
  return (
    <>
      <div className="woocomerce__filtering woocomerce-paddingss">
        <div className="row gapapap">
          {allFilter && Object.keys(allFilter).length ? (
            <div className="col-lg-3 asdgqw">
              <div
                className={
                  openMobile
                    ? "woocomerce__shopsidebar wc_slide_btm showed"
                    : "woocomerce__shopsidebar wc_slide_btm"
                }
              >
                <Accordion className="accordion short-by">
                  <h3 className="woocomerce__shopsidebar-title title-pt">Сортировка :</h3>
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                      <p style={{ textTransform: 'uppercase', fontSize: '15px' }}>Выберите значение :</p>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-collapse collapse show">
                      <SortFilter2
                        sort={allFilter.sort_by}
                        setOpenMobile={setOpenMobile}
                        selectedSort={selectedSort}
                        dispatch={dispatch}
                        filterAll={filterAll}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="woc__filtering-icon">
                <span
                  className="woocomerce__filtering-filtericon"
                  onClick={() => setOpenMobile(!openMobile)}
                >
                  <i className="fa-solid fa-filter"></i> Все фильтры{" "}
                </span>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="col-lg-8">
            {/* shop inner   */}
            <div className="woocomerce__shopsidemain wc_feature_products">
              <div className="woocomerce__feature-wrapper filteringwrapper shopsidebar">
                {showData && showData.length ? (
                  showData.map((el) => <ProductCard el={el} key={el.id} />)
                ) : (
                  <p style={{ textTransform: 'uppercase', fontSize: '15px' }}>No Product Found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideFilter;
