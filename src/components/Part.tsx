import React from "react";
import { IHome } from "../types";

export const Content = (home: IHome, section: any) => {
  const date1 = new Date();
  const date2 = Date.parse(home.articles[section].articles[0].published_date);
  let hours: number = Math.floor(Math.abs(date1 - date2) / 36e5);
  let hoursOrDays = "h ago";
  if (hours > 23) {
    hours = Math.ceil(
      Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))
    );
    hoursOrDays = "d ago";
  }
  return (
    <>
      <div className="bigArticle">
        <img
          className="bigImage"
          src={home.articles[section].articles[0].multimedia[0].url}
          alt={home.articles[section].articles[0].multimedia[0].caption}
        />
        <div className="copyright">
          {home.articles[section].articles[0].multimedia[0].copyright}
        </div>
        <h2 className="title">{home.articles[section].articles[0].title}</h2>
        <p>{home.articles[section].articles[0].abstract}</p>
        <div className="date">{"  " + hours.toString() + hoursOrDays}</div>
        <div className="author">
          {home.articles[section].articles[0].byline + " -"}
        </div>
      </div>

      <div className="midArticle">
        <img
          className="bigImage"
          src={home.articles[section].articles[1].multimedia[0].url}
          alt={home.articles[section].articles[1].multimedia[0].caption}
        />
        <div className="copyright">
          {home.articles[section].articles[1].multimedia[0].copyright}
        </div>
        <h2 className="title">{home.articles[section].articles[1].title}</h2>
        <p>{home.articles[section].articles[1].abstract}</p>
        <div className="date">{"  " + hours.toString() + hoursOrDays}</div>
        <div className="author">
          {home.articles[section].articles[1].byline + " -"}
        </div>
      </div>

      <div className="smallArticles">
        <div className="smallArticle">
          <h2 className="title">{home.articles[section].articles[2].title}</h2>
          <p>{home.articles[section].articles[2].abstract}</p>
          <div className="date">{"  " + hours.toString() + hoursOrDays}</div>
          <div className="author">
            {home.articles[section].articles[2].byline + " -"}
          </div>
        </div>
        <div style={{ borderBottom: "1px solid lightgray" }} />
        <div className="smallArticle">
          <h2 className="title">{home.articles[section].articles[3].title}</h2>
          <p>{home.articles[section].articles[3].abstract}</p>
          <div className="date">{"  " + hours.toString() + hoursOrDays}</div>
          <div className="author">
            {home.articles[section].articles[3].byline + " -"}
          </div>
        </div>
      </div>
    </>
  );
};
