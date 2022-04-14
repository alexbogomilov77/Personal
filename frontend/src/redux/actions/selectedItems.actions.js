import store from "../store";

export const SET_LOADER = "SET_LOADER";
export const SET_SLOW_LOADER = "SET_SLOW_LOADER";
export const SET_SELECTED_TAB = "SET_SELECTED_TAB";
export const SET_SELECTED_CAR = "SET_SELECTED_CAR";
export const SET_SELECTED_FIX = "SET_SELECTED_FIX";
export const SET_SELECTED_PROBLEM = "SET_SELECTED_PROBLEM";
export const SET_SELECTED_PROBLEM_DETAIL = "SET_SELECTED_PROBLEM_DETAIL";

export const setLoader = (payload) => {
  return { type: SET_LOADER, payload };
};
export const setSlowLoader = (payload) => {
  return { type: SET_SLOW_LOADER, payload };
};
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
      dispatch(emptyAllFields(car));
      dispatch(setSelectedCar(car));
      resolve();
    });
  };
}

export function emptyProblems() {
  return (dispatch) => {
    return new Promise((resolve) => {
      dispatch(selectProblem(null));
      dispatch(selectProblemDetail(null));
      resolve();
    });
  };
}

export function emptyAllFields(car) {
  return (dispatch) => {
    return new Promise((resolve) => {
      if (car !== store.getState().selectedItems.selectedCar) {
        dispatch(selectFix(null));
        dispatch(selectProblem(null));
        dispatch(selectProblemDetail(null));
        resolve();
      }
    });
  };
}
