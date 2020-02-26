import React from "react";
import { IState } from "../types";

type IReviewHolderProp = {
  i: number;
  state: IState;
};
export default (props: IReviewHolderProp) => {
  return (
    <>
      {JSON.stringify(props.state.reviews) !== "[]" &&
      props.i < props.state.reviews.length &&
      props.i >= 0 ? (
        <>
          <div className="holder">
            <div className="byline">{props.state.reviews[props.i].byline}</div>
            <div className="headline">
              {props.state.reviews[props.i].headline}
            </div>
            <div id={`review-${props.i}`} className="summary">
              {props.state.reviews[props.i].summary_short}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
