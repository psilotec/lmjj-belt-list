import { connect } from 'react-redux';
import App from '../App';
import { login, logout, loginPersist } from '../actions/index';

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    userAuthInfo: state.userAuthInfo,
    userDbInfo: state.userDbInfo,
  };
};

const mapDispatchToProps = {
  login,
  logout,
  loginPersist,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
