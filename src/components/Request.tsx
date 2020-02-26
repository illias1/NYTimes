import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../Redux/Actions";
import loading from "../30.gif";
import { IState } from "../types";

export default () => {
  const [movieInput, SetMovie] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state);

  return (
    <div className="center">
      {state.loading === true ? <img alt="loading" src={loading} /> : ""}
      <br />
      {state.fetched === true && JSON.stringify(state.reviews) === "[]" ? (
        "We couldn't find any reviews"
      ) : (
        <h2 id="askForReview">
          Search for a movie and we'll show you its reviews
        </h2>
      )}
      <br />
      <input onChange={e => SetMovie(e.target.value)} type="text" />
      <br />
      <button onClick={() => dispatch(fetchReviews(movieInput))}>
        Search for reviews
      </button>
    </div>
  );
};
