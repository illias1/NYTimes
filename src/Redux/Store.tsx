import { createStore, applyMiddleware } from "redux";
import { IState, IAction } from "../types";
import thunk from "redux-thunk";

const initialState: IState = {
  loading: false,
  error: "",
  page: 0,
  reviewPerPage: 3,
  reviews: [],
  fetched: false,
  home: {
    error: "",
    articles: {
      business: {
        loaded: false,
        articles: {}
      },
      books: {
        loaded: false,
        articles: {}
      }
    }
  }
};

const reducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case "nextPage":
      return {
        ...state,
        page: action.payload === state.page ? state.page : state.page + 1
      };
    case "previousPage":
      return {
        ...state,
        page: state.page > 0 ? state.page - 1 : state.page
      };
    case "reviewsNumber":
      return {
        ...state,
        reviewPerPage: action.payload
      };
    case "started":
      return {
        ...state,
        page: 0,
        loading: true
      };
    case "success":
      return {
        ...state,
        loading: false,
        reviews: action.payload,
        fetched: true
      };
    case "error":
      return {
        ...state,
        error: action.payload,
        loading: false,
        fetched: true
      };
    case "nextReview":
      if (state.i + 1 < state.reviews.length) {
        return {
          ...state,
          i: state.i + 1
        };
      } else {
        return {
          ...state,
          reviews: []
        };
      }
    case "books":
      return {
        ...state,
        home: {
          articles: {
            ...state.home.articles,
            books: {
              ...state.home.articles.books,
              loaded: true,
              articles: action.payload
            }
          }
        }
      };
    case "business":
      return {
        ...state,
        home: {
          articles: {
            ...state.home.articles,
            business: {
              ...state.home.articles.business,
              loaded: true,
              articles: action.payload
            }
          }
        }
      };
    case "homeError":
      return {
        ...state,
        home: {
          ...state.home,
          homeError: action.payload
        }
      };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk));
