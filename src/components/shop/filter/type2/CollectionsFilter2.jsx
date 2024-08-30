export default function CollectionsFilter2({
  collections,
  selectedCollections,
  dispatch,
  filterAll,
  setOpenMobile,
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
    setOpenMobile(false);
  };
  return (
    <>
      {collections.value && collections.value.length
        ? collections.value.map((el, i) => (
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
          ))
        : ""}
    </>
  );
}
