import React, { Component } from "react";
import "../App.css";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, linkUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="img-box">
            <img
              src={
                imgUrl
                  ? imgUrl
                  : "https://www.hindustantimes.com/ht-img/img/2024/01/28/1600x900/bigg_boss_17_finale_live_updates_ankita_neil_1706453832612_1706453843790.png"
              }
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={linkUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
