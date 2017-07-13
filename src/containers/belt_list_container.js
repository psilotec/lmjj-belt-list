import { connect } from 'react-redux';
import BeltList from '../components/belt_list';
import { fetchBelts, selectBelt } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        belts: state.belts,
        selectedBelt: state.selectedBelt,    
    };
};

const mapDispatchToProps = {
    fetchBelts, 
    selectBelt,
};

const BeltListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BeltList);

export default BeltListContainer;