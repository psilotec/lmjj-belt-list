import { connect } from 'react-redux';
import Login from '../components/login';
import { login } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
    };
};

const mapDispatchToProps = {
    login,
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;