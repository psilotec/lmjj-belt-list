import React, { Component } from 'react';
import { Alert } from 'antd';

import Belts from './belts';
import BeltImage from './belt_image';

class BeltListDisplay extends Component {
  componentDidMount() {
    this.props.fetchBelts();
    this.props.fetchBeltImages();
  }

  render() {
    let currentBeltImage = this.props.beltImages[this.props.selectedBelt];
    console.log(this.props.userDbInfo);
    return this.props.loggedIn && this.props.belts.length !== 0
      ? <div className="belt-display">
          <div className="belt-list">
            <Belts
              belts={this.props.belts}
              selectBelt={this.props.selectBelt}
            />
          </div>

          {this.props.selectedBelt
            ? <div className="belt-image">
                <BeltImage
                  currentBeltImage={currentBeltImage}
                  beltImages={this.props.beltImages}
                />
              </div>
            : 'Please select a belt'}
        </div>
      : <div>
          <Alert
            message="Login Required"
            description="Please register or login to see belt list."
            type="info"
            showIcon
          />
        </div>;
  }
}

export default BeltListDisplay;
