import React, { Component } from 'react';
import UserInfo from './user_info';
import { Select, Button } from 'antd';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class AdminPanelDisplay extends Component {
  render() {
    return (
      <div className="admin-panel-display">
        <UserInfo />

        <Select
          defaultValue="currentBelt"
          style={{ width: 200 }}
          size="large"
          onChange={handleChange}
        >
          <Option value="white">White</Option>
          <Option value="yellow">Yellow</Option>
          <Option value="yellowb">Yellow - Black stripe</Option>
          <Option value="orange">Orange</Option>
          <Option value="orangeb">Orange - Black Stripe</Option>
          <Option value="green">Green</Option>
          <Option value="greenb">Green - Black Stripe</Option>
          <Option value="red">Red</Option>
          <Option value="redb">Red - Black Stripe</Option>
          <Option value="blue">Blue</Option>
          <Option value="blueb">Blue - Black Stripe</Option>
          <Option value="purple">Purple</Option>
          <Option value="purpleb">Purple - Black Stripe</Option>
          <Option value="brown">Brown</Option>
          <Option value="brownb">Brown - Black Stripe</Option>
          <Option value="black">Black</Option>
        </Select>

        <Button type="primary">Submit</Button>
      </div>
    );
  }
}

export default AdminPanelDisplay;
