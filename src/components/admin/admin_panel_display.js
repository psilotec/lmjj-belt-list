import React from 'react';
import EditUserSettings from './edit_user_settings';

const AdminPanelDisplay = ({ searchedUser, searchUser, changeUserBelt }) => {
  return (
    <div className="admin-panel-display">
      {searchedUser !== null ? (
        <EditUserSettings
          searchUser={searchUser}
          searchedUser={searchedUser}
          changeUserBelt={changeUserBelt}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default AdminPanelDisplay;
