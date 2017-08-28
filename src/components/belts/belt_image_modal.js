import React, { Component } from 'react';
import { Modal } from 'antd';

class BeltImageModal extends Component {
  handleOk = e => {
    this.props.beltImageModalToggle();
  };

  render() {
    return (
      <div>
        <Modal
          visible={this.props.beltImageModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          okText="Close"
          cancelText="Close"
        >
          <img
            src={this.props.currentBeltImage}
            alt="Belt"
            className="current-belt-image"
          />
        </Modal>
      </div>
    );
  }
}

export default BeltImageModal;
