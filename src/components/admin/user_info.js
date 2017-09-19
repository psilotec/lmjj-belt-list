import React, { Component } from 'react';
import { Avatar } from 'antd';

class UserInfo extends Component {
  displayBeltColor = () => {
    const beltColors = [
      'white',
      'yellow',
      'yellowb',
      'orange',
      'orangeb',
      'green',
      'greenb',
      'blue',
      'blueb',
      'red',
      'redb',
      'purple',
      'purpleb',
      'brown',
      'brownb',
      'black',
    ];

    // Return belt color that is === user's beltId
    // (used for assigning the correct color in the below className for styling)
    let found = beltColors.filter(belt => {
      console.log('belt: ' + belt);
      console.log('array index: ' + beltColors.indexOf(belt));
      console.log(
        'user belt perm: ' +
          parseInt(
            '10',
            Object.entries(this.props.searchedUser)[0][1].beltPermissionId
          )
      );
      return (
        parseInt(beltColors.indexOf(belt), 10) ===
        parseInt(
          Object.entries(this.props.searchedUser)[0][1].beltPermissionId,
          10
        )
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
