import { connect } from "react-redux";
import BeltListDisplay from "../components/belt_list_display";
import { fetchBelts, selectBelt, fetchBeltImages } from "../actions/index";

const mapStateToProps = state => {
  return {
    belts: state.belts,
    selectedBelt: state.selectedBelt,
    beltImages: state.beltImages,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = {
  fetchBelts,
  selectBelt,
  fetchBeltImages
};

const BeltListContainer = connect(mapStateToProps, mapDispatchToProps)(
  BeltListDisplay
);

export default BeltListContainer;
