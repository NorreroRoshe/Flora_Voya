import { useEffect, useReducer, useState } from "react";
import ProductCard from "../common/card/ProductCard";
import { Accordion } from "react-bootstrap";
import SortFilter2 from "./filter/type2/SortFilter2";
import CategoryFilter2 from "./filter/type2/CategoryFilter2";
import ColorFilter2 from "./filter/type2/ColorFilter2";
import PriceFilter2 from "./filter/type2/PriceFilter2";
import CollectionsFilter2 from "./filter/type2/CollectionsFilter2";
import RatingFilter2 from "./filter/type2/RatingFilter2";
import filterFunction from "@/lib/utils/filterFunction";
import PovodFilter2 from "./filter/type2/PovodFilter2";
import DeliveryFilter2 from "./filter/type2/DeliveryFilter2";
import Pagination from '@/components/pagination/pagination';

const initialState = {
  selectedCategory: [],
  selectedColor: [],
  selectedPovod: [],
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
    // case "setSelectedDelivery":
    //   return { ...state, selectedDelivery: action.value };
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
    default:
      return state;
  }
};

const SearchFilter = ({ allData, searchValue, allFilter }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [productFilter, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true); // Добавляем состояние загрузки
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('');
  const countPerPage = 20;

  const {
    selectedColor,
    selectedPovod,
    // selectedDelivery,
    selectedPrice,
    selectedCollections,
    selectedRating,
    selectedSort,
    showData,
    selectedCategory,
  } = productFilter;

  const filterAll = () => {
    setCurrentPage(1);
    dispatch({
      type: "setShowData",
      value: filterFunction(
        allData,
        selectedColor,
        selectedCollections,
        // selectedDelivery,
        selectedPovod,
        selectedRating,
        selectedSort,
        selectedPrice,
        selectedCategory
      ),
    });
  };

  let [filterData, setDataValue] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

  useEffect(() => {
    setIsLoading(true);
    const to = countPerPage * currentPage;
    const from = to - countPerPage;
    setDataValue(showData.slice(from, to));
    setIsLoading(false);
  }, [showData, currentPage]);

  const updatePage = (p) => {
    setCurrentPage(p);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    dispatch({
      type: "setShowData",
      value: allData,
    });
  }, [allData]);

  console.log(productFilter, 'productFilter')

  return (
    <>
      <div className="woocomerce__filtering woocomerce-paddingss">
        <div className="row gapapap">

        {allFilter && Object.keys(allFilter).length ? (
            <div className="col-lg-3 asdgqw">
              <div
                className={
                  openMobile
                    ? "woocomerce__shopsidebar wc_slide_btm showed fegrf"
                    : "woocomerce__shopsidebar wc_slide_btm"
                }
              >
                <Accordion className="accordion short-by">


                  <div className="wqfegrbfs">
                    <h3 className="woocomerce__shopsidebar-title">
                      Фильтры :
                    </h3>
                    <h3
                      onClick={() => setOpenMobile(false)}
                      className="woocomerce__shopsidebar-title cwev"
                    >
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="15" fill="white" />
                        <path d="M7 7.00031L23 23M7 22.9997L23 7" stroke="#404040" stroke-miterlimit="10" />
                      </svg>
                    </h3>
                  </div>
                  {/* <Accordion.Item eventKey="9" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                      <p style={{textTransform: 'uppercase', fontSize: '15px' }}>Доставка</p>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-collapse collapse show">
                      <DeliveryFilter2
                        delivery={allFilter.delivery}
                        setOpenMobile={setOpenMobile}
                        selectedDelivery={selectedDelivery}
                        dispatch={dispatch}
                        filterAll={filterAll}
                      />
                    </Accordion.Body>
                  </Accordion.Item> */}









                  {/* <Accordion.Item eventKey="5" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                      <p style={{textTransform: 'uppercase', fontSize: '15px' }}>Повод</p>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-collapse collapse show">
                      <PovodFilter2
                        povod={allFilter.povod}
                        setOpenMobile={setOpenMobile}
                        selectedPovod={selectedPovod}
                        dispatch={dispatch}
                        filterAll={filterAll}
                      />
                    </Accordion.Body>
                  </Accordion.Item> */}




                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                      <p style={{ textTransform: 'uppercase', fontSize: '15px' }}>Категория товара</p>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-collapse collapse show">
                      <CategoryFilter2
                        category={allFilter.category}
                        setOpenMobile={setOpenMobile}
                        selectedCategory={selectedCategory}
                        dispatch={dispatch}
                        filterAll={filterAll}
                      />
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                      <p style={{textTransform: 'uppercase', fontSize: '15px'}}>Цветочное разнообразие</p>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-collapse collapse show">
                      <CollectionsFilter2
                        collections={allFilter.collections}
                        setOpenMobile={setOpenMobile}
                        selectedCollections={selectedCollections}
                        dispatch={dispatch}
                        filterAll={filterAll}
                      />
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                      <p style={{textTransform: 'uppercase', fontSize: '15px'}}>по цвету</p>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-collapse collapse show">
                      <ColorFilter2
                        allColor={allFilter.color}
                        setOpenMobile={setOpenMobile}
                        selectedColor={selectedColor}
                        dispatch={dispatch}
                        filterAll={filterAll}
                      />
                    </Accordion.Body>
                  </Accordion.Item> */}

                  {/* <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                      <p style={{textTransform: 'uppercase', fontSize: '15px'}}>по цене</p>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-collapse collapse show">
                      <PriceFilter2
                        allPrice={allFilter.price}
                        setOpenMobile={setOpenMobile}
                        dispatch={dispatch}
                        filterAll={filterAll}
                      />
                    </Accordion.Body>
                  </Accordion.Item> */}

                  {/* <Accordion.Item eventKey="5" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                      <p>Rating</p>
                    </Accordion.Header>
                    <Accordion.Body className="accordion-collapse collapse show">
                      <RatingFilter2
                        setOpenMobile={setOpenMobile}
                        selectedRating={selectedRating}
                        dispatch={dispatch}
                        filterAll={filterAll}
                      />
                    </Accordion.Body>
                  </Accordion.Item> */}
                  {/* <h3 className="woocomerce__shopsidebar-title title-pt">Сортировка :</h3> */}
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                      <p style={{ textTransform: 'uppercase', fontSize: '15px' }}>Цена</p>
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
            {/* shop inner */}
            <div className="woocomerce__shopsidemain wc_feature_products">
              <div className="woocomerce__feature-wrapper filteringwrapper shopsidebar">
                {isLoading ? (
                  <p>Loading...</p> // Показываем индикатор загрузки, пока данные не готовы
                ) : filterData && filterData.length ? (
                  filterData.map((el) => <ProductCard el={el} key={el.id} />)
                ) : (
                  <p style={{ textTransform: 'uppercase', fontSize: '15px' }}>No Product Found</p>
                )}
              </div>
            </div>

            {showData.length > countPerPage && !value.trim() && (
              <div className="text-end mt-5">
                <Pagination
                  current={currentPage}
                  onChange={updatePage}
                  pageSize={countPerPage}
                  total={showData?.length}
                  prevIcon="<"
                  nextIcon=">"
                  className="order-table-pagination"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
