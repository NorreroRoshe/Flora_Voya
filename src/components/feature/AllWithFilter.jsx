import { useEffect, useState } from "react";
import ProductCard from "../common/card/ProductCard";
import Link from "next/link";

const AllWithFilter = ({ allData }) => {
  const [latest, setLatest] = useState([]);
  const [isActive, setIsActive] = useState(1);
  useEffect(() => {
    if (allData && allData.length) {
      if (allData.length > 8) {
        let last = allData.slice(allData.length - 8, allData.length);
        setLatest(last);
      } else {
        setLatest(allData);
      }
    }
  }, [allData]);
  const filterData = (data, value) => {
    if (data === "all") {
      let result = allData.slice(allData.length - 8, allData.length);
      setLatest(result);
    } else {
      let result = allData.filter((el) => el[data]);
      if (result.length > 8) {
        let last = result.slice(result.length - 8, result.length);
        setLatest(last);
      } else {
        setLatest(result);
      }
    }
    setIsActive(value);
  };
  return (
    <>
      <div className="woocomerce__feature woocomerce-padding wc_feature_products">
        <div className="woocomerce__feature-top">
          <p className="woocomerce__feature-title">(C) You may missed</p>
          <div className="woocomerce__feature-rightwrapper rightwrapper2">
            <div className="woocomerce__feature-arrowwrapper">
              <ul className="nav nav-pills woocomerce__feature-filtermenu">
                <li>
                  <button
                    onClick={() => filterData("all", 1)}
                    className={isActive === 1 ? "nav-link active" : "nav-link"}
                    type="button"
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => filterData("top_selling", 2)}
                    className={isActive === 2 ? "nav-link active" : "nav-link"}
                    type="button"
                  >
                    Top Seller
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => filterData("trendy", 3)}
                    className={isActive === 3 ? "nav-link active" : "nav-link"}
                    type="button"
                  >
                    Trendy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => filterData("man", 4)}
                    className={isActive === 4 ? "nav-link active" : "nav-link"}
                    type="button"
                  >
                    Man
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => filterData("woman", 5)}
                    className={isActive === 5 ? "nav-link active" : "nav-link"}
                    type="button"
                  >
                    Woman
                  </button>
                </li>
              </ul>
            </div>
            <Link className="woocomerce__feature-viewall" href={"shop/full"}>
              View all
            </Link>
          </div>
        </div>

        <div>
          <div className="woocomerce__feature-wrapper filteringwrapper">
            {latest &&
              latest.length &&
              latest.map((el) => <ProductCard key={el.id} el={el} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllWithFilter;
