import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeaderSearch({ allData }) {
  const [searchData, setSearchData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [searchSlug, setSearchSlug] = useState([]);

  const router = useRouter();
  const searchHeader = useRef();
  const searchOpen = useRef();
  const searchClose = useRef();
  const inputData = useRef();

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

  const openSearch = () => {
    searchHeader.current.classList.add("open-search");
    searchOpen.current.style.display = "none";
    searchClose.current.style.display = "block";
    setSearchData(allData);
  };
  const closeSearch = () => {
    searchHeader.current.classList.remove("open-search");
    searchOpen.current.style.display = "block";
    searchClose.current.style.display = "none";
    inputData.current.value = "";
    setSearchSlug([]);
  };

  const searchItem = (event) => {
    event.preventDefault();
    // if (searchSlug && searchSlug.length) {
    //   router.push("/shop/" + searchSlug[0].id);
    // }
    router.push(`/search-page?SearchQuery=${searchValue.replace('+', '%2B')}`);
    closeSearch();
  };
  const navigate = (data) => {
    router.push("/shop/" + data);
  };

  console.log(searchSlug,'searchSlug')

  const onButtonClick = () => {
    router.push(`/search-page?SearchQuery=${searchValue.replace('+', '%2B')}`);
    // handleGetSearchProducts();

    // setInputFocus(false);
    // closeMobileSearch();
    closeSearch();
  }

  return (
    <>
      <div>
        <button
          className="search-icon"
          ref={searchOpen}
          onClick={openSearch}
          id="search_icon"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button
          className="search-icon"
          ref={searchClose}
          onClick={closeSearch}
          id="search_close"
        >
          <i className="fa-solid fa-xmark" style={{color: '#000'}}></i>
        </button>
      </div>
      <div className="header__search" ref={searchHeader}>
        <form autoComplete="off" onSubmit={(event) => searchItem(event)}>
          <input
            type="text"
            name="s"
            autoComplete="off"
            ref={inputData}
            placeholder="Поиск.."
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <div id="search-value">
            {searchSlug && searchSlug.length
              ? searchSlug.slice(0, 3).map((el, i) => (
                  <div
                    className="sacvrbdg pointer_cursor"
                    key={i + "search"}
                    onClick={() => {
                      navigate(el.id);
                      closeSearch();
                    }}
                  >
                    <img
                      src={`/assets/imgs/${el.img}`}
                      className="efwrget"
                      alt={el.title}
                    />
                    <div className="sacvrbdgwe">
                      <p className="search-name qevdf">{el.title}</p>
                      <p className="search-name qevdf">{Math.round(el.price)} ₽</p>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div id="search-value" className='vedbf'>
            {searchValue && searchSlug.length > 0 && (
              <button type="submit" onClick={() => onButtonClick()} className='fwebg'>все результаты</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
