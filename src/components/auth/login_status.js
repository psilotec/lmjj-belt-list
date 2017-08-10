import React from 'react';
import LoginContainer from '../../containers/login_container';

const LoginStatus = ({ loggedIn, userAuthInfo, logout }) => {
  return (
    <div>
      {loggedIn && userAuthInfo != null
        ? <div>
            <div className="username">
              {userAuthInfo.user.email}
              <a className="login-action-text" onClick={logout}>
                Log out
              </a>
            </div>
          </div>
        : <LoginContainer />}
    </div>
  );
};

export default LoginStatus;
