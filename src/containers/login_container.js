import { connect } from 'react-redux';
import Login from '../components/auth/login';
import { login, register } from '../actions/index';

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = {
  login,
  register,
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
