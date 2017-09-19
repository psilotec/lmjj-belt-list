import { combineReducers } from 'redux';
import BeltsReducer from './reducer_belts';
import SelectedBeltReducer from './reducer_selected_belt';
import BeltImagesReducer from './reducer_belt_images';
import LoginReducer from './reducer_login';
import userAuthInfoReducer from './reducer_set_user_auth_info';
import userDbInfoReducer from './reducer_set_user_db_info';
import beltImageModalToggleReducer from './reducer_belt_image_modal_toggle';
import searchedUserReducer from './reducer_searched_user';

const rootReducer = combineReducers({
  belts: BeltsReducer,
  selectedBelt: SelectedBeltReducer,
  beltImages: BeltImagesReducer,
  loggedIn: LoginReducer,
  userAuthInfo: userAuthInfoReducer,
  userDbInfo: userDbInfoReducer,
  beltImageModalVisible: beltImageModalToggleReducer,
  searchedUser: searchedUserReducer,
});

export default rootReducer;
