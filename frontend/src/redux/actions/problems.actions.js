// import baseUrl from "../../utils/axiosConfig";
import axios from "axios";

export const SET_PROBLEMS = "SET_PROBLEMS";

export function setProblems(payload) {
  return { type: SET_PROBLEMS, payload };
}

export function fetchProblems(fix) {
  return (dispatch) => {
    new Promise((resolve) => {
      axios
        .get(`https://app-garage-manager.herokuapp.com/problems/${fix}`)
        .then((response) => {
          dispatch(setProblems(response.data));
          // stopLoading()
          resolve();
        });
    });
  };
}
