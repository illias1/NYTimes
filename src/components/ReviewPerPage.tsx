import React from "react";
import { reviewsNumber } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../types";
import Select from "react-select";

export default () => {
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" }
  ];
  const state = useSelector((state: IState) => state);
  const selectedOption = state.reviewPerPage;
  const dispatch = useDispatch();

  return (
    <div>
      <Select
        placeholder={"Number of reviews per page = " + state.reviewPerPage}
        value={selectedOption.value}
        onChange={(selectedOption: object) =>
          dispatch(reviewsNumber(selectedOption.value))
        }
        options={options}
      />
    </div>
  );
};
