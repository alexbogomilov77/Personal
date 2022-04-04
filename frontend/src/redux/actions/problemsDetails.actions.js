// import baseUrl from "../../utils/axiosConfig";
import axios from "axios";

export const SET_DETAILS = "SET_DETAILS";

export function setDetails(payload) {
  return { type: SET_DETAILS, payload };
}

export function fetchDetails(detailType, problemId) {
  return (dispatch) => {
    new Promise((resolve) => {
      axios
        .get(
          `https://app-garage-manager.herokuapp.com/${detailType}/${problemId}`
        )
        .then((response) => {
          dispatch(setDetails(response.data));
          // stopLoading()
          resolve();
        });
    });
  };
}
