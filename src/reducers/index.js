import { combineReducers } from 'redux';
import BeltsReducer from './reducer_belts';
import SelectedBeltReducer from './reducer_selected_belt';
import BeltImagesReducer from './reducer_belt_images';

const rootReducer = combineReducers({
  belts: BeltsReducer,
  selectedBelt: SelectedBeltReducer,
  beltImages: BeltImagesReducer,
});

export default rootReducer;