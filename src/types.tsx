export type IState = {
  loading: boolean;
  error: string;
  page: number;
  reviewPerPage: number;
  reviews: any[];
  fetched: boolean;
  home: IHome;
};
export type IHome = {
  error: "";
  articles: IArticles;
};
export type IArticles = {
  business: ISection;
  books: ISection;
};
type ISection = {
  loaded: boolean;
  articles: object;
};
export type IAction<T> = {
  type:
    | "nextI"
    | "started"
    | "success"
    | "error"
    | "nextReview"
    | "business"
    | "books"
    | "homeError"
    | "previousPage"
    | "nextPage";
  payload?: T;
};
