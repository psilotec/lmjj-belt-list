import React from 'react';
import LoginContainer from '../containers/login_container';

const LoginStatus = ( { loggedIn, userInfo, logout} ) => {
    return (
        <div>
            {(loggedIn && (userInfo != null)) 
            ? (<div>
                <div className="username">
                    {userInfo.user.email}
                    <a className="login-action-text" onClick={logout}>Log out</a>
                </div>    
            </div>)
            : <LoginContainer />
            }
        </div>
    );
}

export default LoginStatus;