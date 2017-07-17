import React, { Component } from 'react';

import Belts from './belts';
import BeltImage from './belt_image';

class BeltListDisplay extends Component {
    componentDidMount() {
        this.props.fetchBelts();
        this.props.fetchBeltImages();
    }

    render() {
    let currentBeltImage = this.props.beltImages[this.props.selectedBelt];
        return (
            <div className="belt-display">
                <div className="belt-list">
                    <Belts belts={this.props.belts} selectBelt={this.props.selectBelt} />
                </div>

                { (this.props.selectedBelt)                
                ?<div className="belt-image">
                    <BeltImage currentBeltImage={currentBeltImage} beltImages={this.props.beltImages} />
                </div>
                : 'Please select a belt' }

            </div>
        );
    }
};

export default BeltListDisplay;