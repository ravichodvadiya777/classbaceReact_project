import React, { Component } from "react";
import loading from "../loading.gif";
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src={loading}
          alt="loading"
          style={{ margin: "auto", width: "3%" }}
        />
      </div>
    );
  }
}

export default Spinner;
