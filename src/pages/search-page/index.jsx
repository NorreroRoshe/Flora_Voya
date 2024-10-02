"useState"
import { Preloader } from "@/components";
import ProductLayout from "@/components/common/layout/ProductLayout";
import Head from "next/head";
import SearchFilter from "@/components/shop/SearchFilter";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SideBar = () => {
  const [searchData, setSearchData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [searchSlug, setSearchSlug] = useState([]);

  const router = useRouter();
  const searchHeader = useRef();
  const searchOpen = useRef();
  const searchClose = useRef();
  const inputData = useRef();
  const searchParams = useSearchParams();

  const { data: allProducts, error } = useSWR(
    "../assets/json/allProducts.json",
    fetcher
  );
  const { data: filters, error2 } = useSWR(
    "../assets/json/filter.json",
    fetcher
  );

  useEffect(() => {
    const ssearchQuery = searchParams.get('SearchQuery');
    console.log(ssearchQuery,'SearchQuerySearchQuery')
    if (ssearchQuery) {
      setSearchValue(ssearchQuery);
    }
  }, [searchParams]);  
  
  useEffect(() => {
    // if (router.pathname === "/search-page") {
      const timer = setTimeout(() => {
        inputData.current.focus();
      }, 1000); // Задержка в 1 секунду (1000 миллисекунд)

      return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
    // }
  }, [
    // router.pathname,
    //  searchParams
  ]);

  useEffect(() => {
    if (searchData && searchData.length) {
      if (searchValue) {
        const allSlug = [];
        searchData.map((el) => {
          let result = el.title
            .toLowerCase()
            .includes(searchValue.toLowerCase());
          if (result) {
            allSlug.push(el);
          }
        });
        setSearchSlug(allSlug);
      } else {
        const allSlug = [];
        setSearchSlug(allSlug);
      }
    }
  }, [searchValue, searchData]);




  if (error || error2) return <div>Failed to load</div>;
  if (!allProducts || !filters)
    return (
      <div>
        {/* <Preloader /> */}
      </div>
    );

  const allData = allProducts.products;
  const allFilter = filters.filter;

  
  const openSearch = () => {
    setSearchData(allData);
  };

  const closeSearch = () => {
    setSearchSlug([]);
  };

  const searchItem = (event) => {
    event.preventDefault();
    // if (searchSlug && searchSlug.length) {
    //   router.push("/shop/" + searchSlug[0].id);
    // }
    router.push(`/search-page?SearchQuery=${searchValue.replace('+', '%2B')}`);

  };

  return (
    <>
      <Head>
        <title>Поиск - Voya</title>
        <meta name="description" content="Поиск - Voya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductLayout>
          <div className="my-4 pt-md-3 text-center evfbg">
            <div className="header__search open-search dwrbtegrf" ref={searchHeader}>
              <form autoComplete="off" onSubmit={(event) => searchItem(event)}>
                <input
                  type="text"
                  name="s"
                  autoComplete="off"
                  ref={inputData}
                  value={searchValue}
                  placeholder="Я ищу саму прекрасную.."
                  onChange={(event) => setSearchValue(event.target.value)}
                  onFocus={openSearch}
                  className='cadvwfb'
                />
              </form>
            </div>
          {/*             
            <h1 style={{ textTransform: "capitalize" }}>
              все <span style={{ textTransform: "lowercase" }}>товары</span>
            </h1> */}
          </div>
          {/* <br/> */}
          <SearchFilter allData={searchSlug} allFilter={allFilter} searchValue={searchValue}/>
        </ProductLayout>
      </main>
    </>
  );
};

export default SideBar;
