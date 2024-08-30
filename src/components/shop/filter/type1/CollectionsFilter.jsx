export default function CollectionsFilter({
  collections,
  open,
  setOpen,
  selectedCollections,
  dispatch,
  filterAll,
}) {
  const collectionsSelect = (data) => {
    let oldData = selectedCollections;
    let rawData = data.toLowerCase();
    if (oldData.includes(rawData)) {
      let activeIndex = oldData.indexOf(rawData);
      oldData.splice(activeIndex, 1);
    } else {
      oldData.splice(oldData.length, 0, rawData);
    }
    dispatch({
      type: "setSelectedCollections",
      value: oldData,
    });
    filterAll();
  };
  return (
    <>
      <span
        id="collections"
        className={
          selectedCollections && selectedCollections.length ? "item active" : "item"
        }
        onClick={() => setOpen(open === "collections" ? "" : "collections")}
      >
        {collections.name}
      </span>
      {open === "collections" ? (
        <div className="woocomerce__filtering-collections dropdowncommon">
          <span className="woocomerce__filtering-ftitle">{collections.name}</span>
          {collections.value.map((el, i) => (
            <div key={i + "collections"} className="woocomerce__filtering-catefield">
              <input
                type="checkbox"
                id={`collections${i}`}
                onChange={() => collectionsSelect(el)}
                checked={
                  selectedCollections.includes(el.toLowerCase()) ? true : false
                }
              />
              <label htmlFor={`collections${i}`}>{el}</label>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
