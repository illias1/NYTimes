import * as React from "react";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Movies from "./components/Movies";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/reviews">
          <Movies />
        </Route>

        <Route path="/">
          <Section title="Business" />
          <Section title="Books" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
