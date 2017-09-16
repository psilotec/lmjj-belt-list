import React, { Component } from 'react';
import { Avatar } from 'antd';

class UserInfo extends Component {
  displayBeltColor = () => {
    const beltColors = [
      'white',
      'yellow',
      'orange',
      'green',
      'blue',
      'red',
      'purple',
      'brown',
      'black',
    ];

    // Return belt color that is === user's beltId
    let found = beltColors.filter(belt => {
      return (
        beltColors.indexOf(belt) ===
        Object.entries(this.props.searchedUser)[0][1].beltPermissionId
      );
    });
    return found;
  };

  render() {
    return (
      <div className="user-info">
        <Avatar size="large" icon="user" />
        <h2 className="user-name">
          {Object.entries(this.props.searchedUser)[0][1].name}
        </h2>
        <div
          className={`user-belt ${this.displayBeltColor()}`}
        >{`${this.displayBeltColor()} belt`}</div>
      </div>
    );
  }
}

export default UserInfo;
