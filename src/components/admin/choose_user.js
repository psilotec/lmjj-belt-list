import React, { Component } from 'react';

class EditUserSettings extends Component {
  // Map over users object and display user name
  mapUsers = () => {
    return Object.entries(this.props.searchedUser).map(user => {
      return <div key={user[1].name}>{user[1].name}</div>;
    });
  };

  render() {
    return <div>{this.mapUsers()}</div>;
  }
}

export default EditUserSettings;
