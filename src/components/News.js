import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this}apiKey=882c49419b514317bd6c5b6429ee2b1f&page=1&pageSize=${this.props.pageSize}`;
  }

  async componentDidMount() {
    // Fetch data when the component mounts
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=882c49419b514317bd6c5b6429ee2b1f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&apiKey=882c49419b514317bd6c5b6429ee2b1f&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handlePrevClick = async () => {
    console.log("pre");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=882c49419b514317bd6c5b6429ee2b1f&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3 ">
        <h2>NewsMonky - Top Headline</h2>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles !== this.totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {this.state?.articles?.map((row) => {
              return (
                <div className="col-md-4 mb-3">
                  <NewsItem
                    title={row.title ? row.title.slice(0, 45) : ""}
                    description={
                      row.description ? row.description.slice(0, 88) : ""
                    }
                    imgUrl={
                      row.urlToImage
                        ? row.urlToImage
                        : "https://www.hindustantimes.com/ht-img/img/2024/01/28/1600x900/bigg_boss_17_finale_live_updates_ankita_neil_1706453832612_1706453843790.png"
                    }
                    linkUrl={row.url ? row.url : ""}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
