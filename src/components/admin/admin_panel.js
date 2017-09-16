import React, { Component } from 'react';
import AdminPanelDisplay from './admin_panel_display';
import { Input, Alert } from 'antd';
const Search = Input.Search;

class AdminPanel extends Component {
  render() {
    const isAdmin = this.props.userDbInfo && this.props.userDbInfo.admin;
    return (
      <div>
        {isAdmin ? (
          <div className="admin-panel">
            <div className="user-search">
              <Search
                placeholder="input search text"
                style={{ width: 200 }}
                size="large"
                onSearch={value => this.props.searchUser(value.toLowerCase())}
              />
            </div>

            <AdminPanelDisplay
              searchUser={this.props.searchUser}
              searchedUser={this.props.searchedUser}
            />
          </div>
        ) : (
          <div className="content-message-center">
            <Alert
              message="Login Required"
              description="Please register or login."
              type="info"
              showIcon
            />
          </div>
        )}
      </div>
    );
  }
}

export default AdminPanel;
