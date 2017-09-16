import React from 'react';
import EditUserSettings from './edit_user_settings';

const AdminPanelDisplay = ({ searchedUser, searchUser }) => {
  return (
    <div className="admin-panel-display">
      {searchedUser !== null ? (
        <EditUserSettings searchUser={searchUser} searchedUser={searchedUser} />
      ) : (
        ''
      )}
    </div>
  );
};

export default AdminPanelDisplay;
