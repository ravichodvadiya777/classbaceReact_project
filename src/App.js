import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/general"
              Component={() => (
                <News
                  key="general"
                  pageSize={5}
                  country="in"
                  category="general"
                />
              )}
            ></Route>
            <Route
              exact
              path="/bussiness"
              Component={() => (
                <News
                  key="bussiness"
                  pageSize={5}
                  country="in"
                  category="bussiness"
                />
              )}
            ></Route>
            <Route
              exact
              path="/entertainment"
              Component={() => (
                <News
                  key=""
                  pageSize={5}
                  country="in"
                  category="entertainment"
                />
              )}
            ></Route>
            <Route
              exact
              path="/health"
              Component={() => {
                <News
                  key="health"
                  pageSize={5}
                  country="in"
                  category="health"
                />;
              }}
            ></Route>
            <Route
              exact
              path="/science"
              Component={() => {
                <News
                  key="science"
                  pageSize={5}
                  country="in"
                  category="science"
                />;
              }}
            ></Route>
            <Route
              exact
              path="/sports"
              Component={() => {
                <News
                  key="sports"
                  pageSize={5}
                  country="in"
                  category="sports"
                />;
              }}
            ></Route>
            <Route
              exact
              path="/technology"
              Component={() => {
                <News
                  key="technology"
                  pageSize={5}
                  country="in"
                  category="technology"
                />;
              }}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
