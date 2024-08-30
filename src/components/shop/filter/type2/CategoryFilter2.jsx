export default function CategoryFilter2({
  category,
  selectedCategory,
  dispatch,
  filterAll,
  setOpenMobile,
}) {
  const categorySelect = (data) => {
    let oldData = selectedCategory;
    let rawData = data.toLowerCase();
    if (oldData.includes(rawData)) {
      oldData.splice(0, oldData.length);
    } else {
      oldData.length = 0;
      oldData.splice(oldData.length, 0, rawData);
    }
    dispatch({
      type: "setSelectedCategory",
      value: oldData,
    });
    filterAll();
    setOpenMobile(false);
  };
  return (
    <>
      {category.value && category.value.length
        ? category.value.map((el, i) => (
            <div
              key={i + "category"}
              className="woocomerce__filtering-catefield"
            >
              <input
                type="checkbox"
                id={`cate${i}`}
                onChange={() => categorySelect(el)}
                checked={
                  selectedCategory.includes(el.toLowerCase()) ? true : false
                }
              />
              <label htmlFor={`cate${i}`}>{el}</label>
            </div>
          ))
        : ""}
    </>
  );
}
