import React, { Component } from 'react';
import UserInfo from './user_info';
import ChooseUser from './choose_user';
import { Select, Button } from 'antd';

const Option = Select.Option;

class EditUserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = { newBelt: 0 };
  }

  handleChange = value => {
    this.setState((prevState, props) => ({
      newBelt: value,
    }));
  };

  handleSubmitBeltChange = () => {
    this.props.changeUserBelt(
      Object.entries(this.props.searchedUser)[0][0],
      this.state.newBelt
    );
  };

  render() {
    // If there are multiple users returned from the search query, display ChooseUser component
    let usersReturnedFromSearch =
      this.props.searchedUser && Object.keys(this.props.searchedUser).length;

    return (
      <div>
        {usersReturnedFromSearch > 1 ? (
          <ChooseUser
            searchUser={this.props.searchUser}
            searchedUser={this.props.searchedUser}
          />
        ) : (
          <div className="edit-user-settings">
            <UserInfo searchedUser={this.props.searchedUser} />
            <Select
              defaultValue="Select a new belt"
              style={{ width: 200 }}
              size="large"
              onChange={this.handleChange}
            >
              <Option value="0">White</Option>
              <Option value="1">Yellow</Option>
              <Option value="2">Yellow - Black stripe</Option>
              <Option value="3">Orange</Option>
              <Option value="4">Orange - Black Stripe</Option>
              <Option value="5">Green</Option>
              <Option value="6">Green - Black Stripe</Option>
              <Option value="7">Red</Option>
              <Option value="8">Red - Black Stripe</Option>
              <Option value="9">Blue</Option>
              <Option value="10">Blue - Black Stripe</Option>
              <Option value="11">Purple</Option>
              <Option value="12">Purple - Black Stripe</Option>
              <Option value="13">Brown</Option>
              <Option value="14">Brown - Black Stripe</Option>
              <Option value="15">Black</Option>
            </Select>
            <Button
              className="admin-submit"
              type="primary"
              onClick={this.handleSubmitBeltChange}
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default EditUserSettings;
