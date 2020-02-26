import React from "react";
import { useSelector } from "react-redux";
import loader from "../30.gif";
import { Content } from "./Part";
import { IState } from "../types";

export default (props: { title: string }) => {
  const home = useSelector((state: IState) => state.home);
  const section = props.title.toLowerCase();
  return (
    <div>
      <h2 className="center"> {props.title} </h2>
      <div className="articles">
        {home.articles[section].loaded === false ? (
          <img src={loader} alt="loading" />
        ) : (
          Content(home, section)
        )}
      </div>
    </div>
  );
};
