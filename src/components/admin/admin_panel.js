import React, { Component } from 'react';
import AdminPanelDisplay from './admin_panel_display';
import { Input } from 'antd';
const Search = Input.Search;

class AdminPanel extends Component {
  render() {
    return (
      <div className="admin-panel">
        <div className="user-search">
          <Search
            placeholder="input search text"
            style={{ width: 200 }}
            size="large"
            onSearch={value => this.props.searchUser(value)}
          />
        </div>

        <AdminPanelDisplay searchedUser={this.props.searchedUser} />
      </div>
    );
  }
}

export default AdminPanel;
