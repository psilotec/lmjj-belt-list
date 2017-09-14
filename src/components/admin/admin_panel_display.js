import React from 'react';
import EditUserSettings from './edit_user_settings';

const AdminPanelDisplay = ({ searchedUser }) => {
  return (
    <div className="admin-panel-display">
      {searchedUser !== null ? (
        <EditUserSettings searchedUser={searchedUser} />
      ) : (
        ''
      )}
    </div>
  );
};

export default AdminPanelDisplay;
