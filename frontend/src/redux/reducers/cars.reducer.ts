import { SET_CARS, CarsStateType, CarsActionTypes } from "../types/CarsStateTypes";

const initialState: CarsStateType = {
  cars: null
};

const carsReducer = (state = initialState, action: CarsActionTypes) => {
  switch (action.type) {
    case SET_CARS:
      return { ...state, cars: action.payload };
    default:
      return state;
  }
};

export default carsReducer;
