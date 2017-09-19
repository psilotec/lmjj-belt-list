import { connect } from 'react-redux';
import AdminPanel from '../components/admin/admin_panel';
import { searchUser, changeUserBelt } from '../actions/index';

const mapStateToProps = state => {
  return {
    searchedUser: state.searchedUser,
    userDbInfo: state.userDbInfo,
  };
};

const mapDispatchToProps = {
  searchUser,
  changeUserBelt,
};

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPanel);

export default AdminContainer;
