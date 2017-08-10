import { connect } from 'react-redux';
import BeltListDisplay from '../components/belts/belt_list_display';
import { selectBelt } from '../actions/index';

const mapStateToProps = state => {
  return {
    belts: state.belts,
    selectedBelt: state.selectedBelt,
    beltImages: state.beltImages,
    loggedIn: state.loggedIn,
    userDbInfo: state.userDbInfo,
  };
};

const mapDispatchToProps = {
  selectBelt,
};

const BeltListContainer = connect(mapStateToProps, mapDispatchToProps)(
  BeltListDisplay
);

export default BeltListContainer;
