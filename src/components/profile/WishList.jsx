import { useContext } from "react";
import AppContext from "../AppContext";
import WishListItem from "./WishListItem";
import { useState } from "react";
import { useEffect } from "react";

export default function WishList() {
  const context = useContext(AppContext);
  const [wishlistData, setWishlistData] = useState([]);
  const removeWishlist = (data) => {
    let oldData = [...wishlistData];
    let result = oldData.find((el) => el.parent_id === data.parent_id);
    if (result) {
      let activeIndex = oldData.indexOf(result);
      oldData.splice(activeIndex, 1);
      context.dispatch({
        type: "setAllWishList",
        value: oldData,
      });
      setWishlistData(oldData);
    }
  };

  useEffect(() => {
    setWishlistData(context.rootState.allWishList);
  }, [context.rootState.allWishList]);
  return (
    <>
      <div className="tab-pane fade show">
        <div className="woocomerce__account-rtitlewrap">
          <span className="woocomerce__account-rtitle">your wishlist: </span>
        </div>

        <div className="wishlist__items">
          {wishlistData && wishlistData.length ? (
            wishlistData.map((el, i) => (
              <WishListItem
                key={i + "wishlist"}
                el={el}
                removeWishlist={removeWishlist}
              />
            ))
          ) : (
            <p>No Wishlist Found</p>
          )}
        </div>
      </div>
    </>
  );
}
