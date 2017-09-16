import React from 'react';
import { Avatar } from 'antd';

const UserInfo = ({ searchedUser }) => {
  return (
    <div className="user-info">
      <Avatar size="large" icon="user" />
      <h2 className="user-name">{Object.entries(searchedUser)[0][1].name}</h2>
      <div className="user-belt">Green Belt</div>
    </div>
  );
};

export default UserInfo;
