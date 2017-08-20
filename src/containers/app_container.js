import { connect } from 'react-redux';
import App from '../App';
import { logout } from '../actions/index';

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    userAuthInfo: state.userAuthInfo,
    userDbInfo: state.userDbInfo,
  };
};

const mapDispatchToProps = {
  logout,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
