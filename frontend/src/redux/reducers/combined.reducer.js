import { combineReducers } from "redux";
import carsReducer from "./cars.reducer";
import fixesReducer from "./fixes.reducer";
import problemsReducer from "./problems.reducer";
import problemsDetailsReducer from "./problemsDetails.reducer";
import selectedItemsReducer from "./selectedItems.reducer";

const combinedReducers = combineReducers({
  cars: carsReducer,
  fixes: fixesReducer,
  problems: problemsReducer,
  problemsDetails: problemsDetailsReducer,
  selectedItems: selectedItemsReducer
});

export default combinedReducers;
