import { connect } from 'react-redux';
import App from '../App';
import { logout } from '../actions/index';
import { fetchBelts, fetchBeltImages } from '../actions/index';

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    userAuthInfo: state.userAuthInfo,
  };
};

const mapDispatchToProps = {
  logout,
  fetchBelts,
  fetchBeltImages,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
