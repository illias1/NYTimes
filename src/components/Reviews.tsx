import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../types";
import { nextPage, previousPage } from "../Redux/Actions";
import ReviewHolder from "./ReviewHolder";

export default () => {
  const dispatch = useDispatch();
  const state = useSelector((state: IState) => state);
  const arr: any[] = [];
  for (let k = 0; k < state.reviewPerPage; k++) {
    arr.push(
      <ReviewHolder
        state={state}
        i={k + state.page * state.reviewPerPage}
        key={k}
      />
    );
  }
  const lastPage = Math.floor(state.reviews.length / state.reviewPerPage);

  return (
    <>
      <div className="reviews">{arr}</div>

      <div className="containerPagination">
        {state.page === 0 ? (
          ""
        ) : (
          <button
            className="pagination"
            onClick={() => dispatch(previousPage())}
          >
            {" "}
            {"<"}{" "}
          </button>
        )}

        <div className="pagination">{state.page}</div>

        {state.page === lastPage ? (
          ""
        ) : (
          <button
            className="pagination"
            onClick={() => dispatch(nextPage(lastPage))}
          >
            >
          </button>
        )}
      </div>
    </>
  );
};
