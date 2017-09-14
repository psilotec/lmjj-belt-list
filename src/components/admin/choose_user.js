import React, { Component } from 'react';
import { Button } from 'antd';

class ChooseUser extends Component {
  // Map over users object and display user name
  mapUsers = () => {
    return Object.entries(this.props.searchedUser).map(user => {
      return (
        <Button key={user[1].name} className="choose-user-btn">
          {user[1].name}
        </Button>
      );
    });
  };

  render() {
    return (
      <div className="choose-user">
        <h1>Please select a user</h1>
        {this.mapUsers()}
      </div>
    );
  }
}

export default ChooseUser;
