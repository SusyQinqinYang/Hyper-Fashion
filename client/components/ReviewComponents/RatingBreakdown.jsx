import React from "react";
import { useEffect, useState } from "react";
import $ from "jquery";
import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import ratingBreakDownPercentage from "./ReviewComponentHelpers/ratingBreakdownPercentage";
import "./ReviewStyles/reviewstyles.css";

const RatingBreakdown = (props) => {
  const [bar, toggleBar] = useState([]);

  function updateFilter(event, input) {
    if (bar.includes(input)) {
      props.removefromFilter(input);
      toggleBar(bar.filter((item) => item !== input));
    } else {
      props.addtoFilter(input);
      toggleBar([...bar, input]);
    }
  }

  function removeFilters() {
    props.removeAllFilters();
    toggleBar([]);
  }

  if (props.rate) {
    var valueFive;
    var valueFour;
    var valueThree;
    var valueTwo;
    var valueOne;
    isNaN(props.rate[5]) ? (valueFive = 0) : (valueFive = props.rate[5]);
    isNaN(props.rate[4]) ? (valueFour = 0) : (valueFour = props.rate[4]);
    isNaN(props.rate[3]) ? (valueThree = 0) : (valueThree = props.rate[3]);
    isNaN(props.rate[2]) ? (valueTwo = 0) : (valueTwo = props.rate[2]);
    isNaN(props.rate[1]) ? (valueOne = 0) : (valueOne = props.rate[1]);
  }
  const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      width: 235,
      backgroundColor: lighten("#ebebeb", 0.3),
      margin: 10,
      position: "relative",
      left: 45,
    },
    bar: {
      borderRadius: 0,
      backgroundColor: "#23f0a0",
    },
  })(LinearProgress);
  return (
    <div>
      <div className="linearbar5">
        <div
          className={bar.includes(5) ? "starrating-clicked" : "starrating"}
          onClick={(event) => updateFilter(event, 5)}
          style={{ marginRight: "5px", zIndex: 2 }}
        >
          5 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueFive || 0}
        />
      </div>
      <div className="linearbar4">
        <div
          // className="starrating"
          className={bar.includes(4) ? "starrating-clicked" : "starrating"}
          onClick={(event) => updateFilter(event, 4)}
          style={{ marginRight: "5px", zIndex: 2 }}
        >
          4 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueFour || 0}
        />
      </div>
      <div className="linearbar3">
        <div
          className={bar.includes(3) ? "starrating-clicked" : "starrating"}
          onClick={(event) => updateFilter(event, 3)}
          style={{ marginRight: "5px", zIndex: 2 }}
        >
          3 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueThree || 0}
        />
      </div>
      <div className="linearbar2">
        <div
          className={bar.includes(2) ? "starrating-clicked" : "starrating"}
          onClick={(event) => updateFilter(event, 2)}
          style={{ marginRight: "5px", zIndex: 2 }}
        >
          2 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueTwo || 0}
        />
      </div>
      <div className="linearbar1">
        <div
          className={bar.includes(1) ? "starrating-clicked" : "starrating"}
          onClick={(event) => updateFilter(event, 1)}
          style={{ marginRight: "5px", zIndex: 2 }}
        >
          1 stars
        </div>
        <BorderLinearProgress
          className="whatever"
          variant="determinate"
          color="secondary"
          value={valueOne || 0}
        />
        <div style={{ height: 10, width: 235 }}></div>
        {props.totalFilters.length ? (
          <div>
            Filter currently applied: {props.totalFilters.toString()} |{" "}
            <a id="removefiltersbutton" onClick={() => removeFilters()}>
              Remove All Filters
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default RatingBreakdown;
