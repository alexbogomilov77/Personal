import { combineReducers } from "redux";
import carsReducer from "./cars.reducer";
import fixesReducer from "./fixes.reducer";
import selectedItemsReducer from "./selectedItems.reducer";

const combinedReducers = combineReducers({
  cars: carsReducer,
  fixes: fixesReducer,
  selectedItems: selectedItemsReducer
});

export default combinedReducers;
