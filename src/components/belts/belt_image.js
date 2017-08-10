import React, { Component } from "react";
import { Spin } from "antd";

class BeltImage extends Component {
  state = {
    currentPage: 0
  };

  render() {
    return (
      <div className="current-belt-image-container">
        {this.props.beltImages
          ? <div>
              <img
                src={this.props.currentBeltImage}
                alt="Belt"
                className="current-belt-image"
              />
            </div>
          : <Spin />}
      </div>
    );
  }
}

export default BeltImage;
