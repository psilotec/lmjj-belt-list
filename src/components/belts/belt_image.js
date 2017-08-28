import React, { Component } from 'react';
import BeltImageModal from './belt_image_modal';

class BeltImage extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    const { width } = this.state;
    return (
      <div className="current-belt-image-container">
        {this.props.beltImages && width < 768
          ? <BeltImageModal
              currentBeltImage={this.props.currentBeltImage}
              beltImageModalVisible={this.props.beltImageModalVisible}
              beltImageModalToggle={this.props.beltImageModalToggle}
            />
          : <div>
              <img
                src={this.props.currentBeltImage}
                alt="Belt"
                className="current-belt-image"
              />
            </div>}
      </div>
    );
  }
}

export default BeltImage;
