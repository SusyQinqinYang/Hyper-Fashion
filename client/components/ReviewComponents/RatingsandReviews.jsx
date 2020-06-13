import React from 'react';
import { useEffect, useState } from 'react';
import RatingInfo from '../../containers/ReviewComponentContainers/RatingInfoContainer';
import ReviewList from '../../containers/ReviewComponentContainers/ReviewListContainer';
import './ReviewStyles/reviewstyles.css';

const RatingsandReviews = (props) => {
  const [filteredState, setFilteredState] = useState([]);

  useEffect(() => {
    setFilteredState([]);
  }, [props.page]);

  function addFilters(input) {
    setFilteredState([...filteredState, input]);
  }

  function removeFilter(input) {
    setFilteredState(filteredState.filter((item) => item !== input));
  }

  function removeAllFilters(input) {
    setFilteredState([]);
  }

  return (
    <div
      style={{
        position: "relative",
        flexDirection: "column",
        display: "flex",
        // left: "14rem",
        // marginRight: "20%",
        width: '80%',
        margin: '0px auto',
      }}
    >
      <div className="flex-container review" >
        <div className="flex-container ratinginfo">
          <h1 style={{ fontSize: 20, fontWeight: 'bold', height: 30 }}>
            RATING & REVIEWS
          </h1>
          <RatingInfo
            removeAllFilters={removeAllFilters}
            removefromFilter={removeFilter}
            addtoFilter={addFilters}
            page={props.page}
            totalFilters={filteredState}
          />
        </div>
        <div className="overallspacerdiv"></div>
        <div className="reviewList-full">
          <ReviewList totalFilters={filteredState} page={props.page} />
        </div>
      </div>
    </div>
  );
};

export default RatingsandReviews;
