import { IAction } from "../types";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import axios from "axios";

export const nextPage = (lastPage: number): IAction<number> => ({
  type: "nextPage",
  payload: lastPage
});
export const previousPage = (): IAction<void> => ({ type: "previousPage" });
export const reviewsNumber = (number: number): IAction<number> => ({
  type: "reviewsNumber",
  payload: number
});
export const nextStarted = (): IAction<void> => ({ type: "started" });
export const nextSuccess = (list: string[]): IAction<string[]> => ({
  type: "success",
  payload: list
});
export const nextError = (error: any): IAction<any> => ({
  type: "error",
  payload: error
});
export const nextReview = (): IAction<void> => ({ type: "nextReview" });

export const fetchReviews = (
  movieName: string
): ThunkAction<Promise<void>, {}, {}, Action<string>> => async dispatch => {
  dispatch(nextStarted());
  const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieName}&api-key=qP5tYCCGgNpiAxjjq50Nr0GcTPlhS8zP`;
  try {
    const response = await axios.get(url);
    const body = response.data;
    const reviews = body.results as any[];
    dispatch(nextSuccess(reviews));
  } catch (e) {
    dispatch(nextError(e));
  }
};

export const homeBusiness = (articles: any[]): IAction<any[]> => ({
  type: "business",
  payload: articles
});
export const homeBooks = (articles: any[]): IAction<any[]> => ({
  type: "books",
  payload: articles
});
export const homeError = (error: any): IAction<any> => ({
  type: "homeError",
  payload: error
});

export const fetchHome = (
  sectionName: string
): ThunkAction<Promise<void>, {}, {}, Action<string>> => async dispatch => {
  const section = sectionName.toLowerCase();
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=qP5tYCCGgNpiAxjjq50Nr0GcTPlhS8zP`;

  try {
    const response = await axios.get(url);
    const body = response.data;
    const articles = body.results as any[];
    switch (section) {
      case "business":
        dispatch(homeBusiness(articles));
        break;
      case "books":
        dispatch(homeBooks(articles));
        break;
    }
  } catch (e) {
    dispatch(homeError(e));
  }
};
