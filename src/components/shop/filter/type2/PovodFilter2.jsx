export default function PovodFilter2({
  povod,
  selectedPovod,
  dispatch,
  filterAll,
  setOpenMobile,
}) {
  const povodSelect = (data) => {
    let oldData = selectedPovod;
    let rawData = data.toLowerCase();
    if (oldData?.includes(rawData)) {
      let activeIndex = oldData.indexOf(rawData);
      oldData.splice(activeIndex, 1);
    } else {
      oldData?.splice(oldData.length, 0, rawData);
    }
    dispatch({
      type: "setSelectedPovod",
      value: oldData,
    });
    filterAll();
    setOpenMobile(false);
  };
  return (
    <>
      {povod.value && povod.value.length
        ? povod.value.map((el, i) => (
            <div key={i + "povod"} className="woocomerce__filtering-catefield">
              <input
                type="checkbox"
                id={`povod${i}`}
                onChange={() => povodSelect(el)}
                checked={
                  selectedPovod?.includes(el.toLowerCase()) ? true : false
                }
              />
              <label style={{textTransform: 'capitalize'}} htmlFor={`povod${i}`}>{el}</label>
            </div>
          ))
        : ""}
    </>
  );
}
