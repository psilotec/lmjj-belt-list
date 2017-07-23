import React from 'react';
import LoginContainer from '../containers/login_container';

const LoginStatus = ( { loggedIn, userInfo} ) => {
    return (
        <div>
            {(loggedIn && (userInfo != null)) 
            ? (<div>
                <div className="username">
                    {userInfo.user.email}
                    <a className="login-action-text" onClick={console.log(`log out`)}>Log out</a>
                </div>    
            </div>)
            : <LoginContainer />
            }
        </div>
    );
}

export default LoginStatus;