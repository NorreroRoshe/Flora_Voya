export default function CategoryFilter({
  category,
  open,
  setOpen,
  selectedCategory,
  dispatch,
  filterAll,
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
  };
  return (
    <>
      <span
        id="brand"
        className={
          selectedCategory && selectedCategory.length ? "item active" : "item"
        }
        onClick={() => setOpen(open === "category" ? "" : "category")}
      >
        {category.name}
      </span>
      {open === "category" ? (
        <div className="woocomerce__filtering-brand dropdowncommon">
          <span className="woocomerce__filtering-ftitle">{category.name}</span>
          {category.value.map((el, i) => (
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
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
