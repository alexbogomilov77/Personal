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
export const selectFix = (payload) => {
  return { type: SET_SELECTED_FIX, payload };
};
export const selectProblem = (payload) => {
  return { type: SET_SELECTED_PROBLEM, payload };
};
export const selectProblemDetail = (payload) => {
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
    return new Promise((resolve) => {
      emptyAllFields(car);
      dispatch(setSelectedCar(car));
      resolve();
    });
  };
}

export const emptyProblems = () => () => {
  selectProblem(null);
  selectProblemDetail(null);
};

export const emptyAllFields = () => (car) => {
  if (car !== store.getState().selectedItems.selectedCar) {
    selectFix(null);
    selectProblem(null);
    selectProblemDetail(null);
  }
};
