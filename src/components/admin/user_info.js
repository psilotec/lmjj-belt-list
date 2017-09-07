import React from 'react';
import { Avatar } from 'antd';

const UserInfo = () => {
  return (
    <div className="user-info">
      <Avatar size="large" icon="user" />
      <h2 className="user-name">User1@gmail.com</h2>
      <div className="user-belt">Green Belt</div>
    </div>
  );
};

export default UserInfo;
