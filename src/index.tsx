import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Store from "./Redux/Store";
import { Provider } from "react-redux";
import { fetchHome } from "./Redux/Actions";

Store.dispatch(fetchHome("business"));
Store.dispatch(fetchHome("books"));

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);
