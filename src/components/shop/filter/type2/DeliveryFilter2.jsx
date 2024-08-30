export default function DeliveryFilter2({
  delivery,
  selectedDelivery,
  dispatch,
  filterAll,
  setOpenMobile,
}) {
  const deliverySelect = (data) => {
    let oldData = selectedDelivery;
    let rawData = data.toLowerCase();
    if (oldData?.includes(rawData)) {
      let activeIndex = oldData.indexOf(rawData);
      oldData.splice(activeIndex, 1);
    } else {
      oldData?.splice(oldData.length, 0, rawData);
    }
    dispatch({
      type: "setSelectedDelivery",
      value: oldData,
    });
    filterAll();
    setOpenMobile(false);
  };
  return (
    <>
      {delivery.value && delivery.value.length
        ? delivery.value.map((el, i) => (
            <div key={i + "delivery"} className="woocomerce__filtering-catefield">
              <input
                type="checkbox"
                id={`delivery${i}`}
                onChange={() => deliverySelect(el)}
                checked={
                  selectedDelivery?.includes(el.toLowerCase()) ? true : false
                }
              />
              <label style={{textTransform: 'capitalize'}} htmlFor={`delivery${i}`}>{el}</label>
            </div>
          ))
        : ""}
    </>
  );
}
