import { combineReducers } from 'redux';
import BeltsReducer from './reducer_belts';
import SelectedBeltReducer from './reducer_selected_belt';
import BeltImagesReducer from './reducer_belt_images';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  belts: BeltsReducer,
  selectedBelt: SelectedBeltReducer,
  beltImages: BeltImagesReducer,
  loggedIn: LoginReducer,
});

export default rootReducer;