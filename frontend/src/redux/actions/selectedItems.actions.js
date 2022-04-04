import store from "../store";

export const SET_SELECTED_TAB = "SET_SELECTED_TAB";
export const SET_SELECTED_CAR = "SET_SELECTED_CAR";
export const SET_SELECTED_FIX = "SET_SELECTED_FIX";
export const SET_SELECTED_PROBLEM = "SET_SELECTED_PROBLEM";
export const SET_SELECTED_PROBLEM_DETAIL = "SET_SELECTED_PROBLEM_DETAIL";

export const setSelectTab = (payload) => {
  return { type: SET_SELECTED_TAB, payload };
};
export const setSelectedCar = (payload) => {
  return { type: SET_SELECTED_CAR, payload };
};
export const setSelectedFix = (payload) => {
  return { type: SET_SELECTED_FIX, payload };
};
export const setSelectedProblem = (payload) => {
  return { type: SET_SELECTED_PROBLEM, payload };
};
export const setSelectedProblemDetail = (payload) => {
  return { type: SET_SELECTED_PROBLEM_DETAIL, payload };
};

export function selectTab(tab) {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch(setSelectTab(tab));
      resolve();
    });
  };
}

export function selectCar(car) {
  return (dispatch) => {
    new Promise((resolve) => {
      emptyAllFields(car);
      dispatch(setSelectedCar(car));
      resolve();
    });
  };
}

export function emptyAllFields(car) {
  return (dispatch) => {
    new Promise((resolve) => {
      if (car !== store.getState().selectedCar) {
        dispatch(setSelectedFix(null));
        dispatch(setSelectedProblem(null));
        dispatch(setSelectedProblemDetail(null));
        resolve();
      }
    });
  };
}
