import { useRef, useState } from "react";

export default function PriceFilter2({
  allPrice,
  setOpenMobile,
  dispatch,
  filterAll,
}) {
  const [rangeValue1, setRangeValue1] = useState(allPrice.value.start);
  const [rangeValue2, setRangeValue2] = useState(allPrice.value.end);
  let minimum = allPrice.value.start;
  let maximum = allPrice.value.end;
  const progressSlide = useRef(null);

  const progressValue = (data) => {
    let minValue = parseInt(rangeValue1);
    let maxValue = parseInt(rangeValue2);
    if (data === "left") {
      return (minValue / maximum) * 100 + "%";
    } else if (data === "right") {
      return 100 - (maxValue / maximum) * 100 + "%";
    }
    dispatch({
      type: "setSelectedPrice",
      value: [rangeValue1, rangeValue2],
    });
    filterAll();
  };

  const changeValue = (e) => {
    let topValue = 100;
    let minValue = parseInt(rangeValue1);
    let maxValue = parseInt(rangeValue2);
    let progress = progressSlide.current;
    if (maxValue - minValue < topValue) {
      if (e.target.className === "min_value") {
        setRangeValue1(maxValue - topValue);
      } else if (e.target.className === "max_value") {
        setRangeValue2(minValue - topValue);
      }
    } else {
      progress.style.left = (minValue / minimum) * 100 + "%";
      progress.style.right = 100 - (maxValue / maximum) * 100 + "%";
    }
    dispatch({
      type: "setSelectedPrice",
      value: [rangeValue1, rangeValue2],
    });
    filterAll();
  };
  return (
    <>
      <div className="woocomerce__filtering-brand shop-left">
        <div className="price-range-slider">
          <p className="range-value">
            <span>₽ {rangeValue1}</span> - <span>₽ {rangeValue2}</span>
          </p>
          <div style={{ marginTop: "10px" }}>
            <div className="custom_slider">
              <div
                className="slider_progress"
                style={{
                  left: progressValue("left"),
                  right: progressValue("right"),
                }}
                ref={progressSlide}
              ></div>
            </div>
            <div className="range_slier_imput">
              <input
                type="range"
                className="min_value"
                min={minimum}
                max={maximum}
                value={rangeValue1}
                onChange={(event) => {
                  setRangeValue1(event.target.value);
                  changeValue(event);
                }}
                onTouchEnd={() => setOpenMobile(false)}
                onMouseLeave={() => setOpenMobile(false)}
              />
              <input
                type="range"
                className="max_value"
                min={minimum}
                max={maximum}
                value={rangeValue2}
                onChange={(event) => {
                  setRangeValue2(event.target.value);
                  changeValue(event);
                }}
                onTouchEnd={() => setOpenMobile(false)}
                onMouseLeave={() => setOpenMobile(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
