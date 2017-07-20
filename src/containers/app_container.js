import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        userInfo: state.userInfo,
    };
};

const mapDispatchToProps = {
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;