import React, { Component } from 'react';
import Belts from './belts';

class BeltList extends Component {
    componentDidMount() {
        this.props.fetchBelts();
    }

    render() {
        return (
            <div className="belt-list">
                <Belts belts={this.props.belts} selectBelt={this.props.selectBelt} />
            </div>
        );
    }
};

export default BeltList;