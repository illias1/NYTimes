import React from "react";
import Reviews from "./Reviews";
import Request from "./Request";
import ReviewPerPage from "./ReviewPerPage";

export default () => {
  return (
    <div>
      <Request />
      <ReviewPerPage />

      <br />
      <Reviews />
    </div>
  );
};
