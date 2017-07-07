import { connect } from 'react-redux';
import BeltList from '../components/belt_list';

const mapStateToProps = (state, ownProps) => {
    return {
        // someState: state.someState,
    };
};

const mapDispatchToProps = {
    // firstAction,
};

const BeltListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeltList);

export default BeltListContainer;