// import baseUrl from "../../utils/axiosConfig";
import axios from "axios";

export const SET_FIXES = "SET_FIXES";

export function setFixes(payload) {
  return { type: SET_FIXES, payload };
}

export function fetchFixes(carId) {
  return (dispatch) => {
    new Promise((resolve) => {
      axios
        .get(`https://app-garage-manager.herokuapp.com/fixes/${carId}`)
        .then((response) => {
          dispatch(setFixes(response.data));
          // stopLoading()
          resolve();
        });
    });
  };
}

export function addFix(fix) {
  return () => {
    new Promise((resolve) => {
      axios
        .post("https://app-garage-manager.herokuapp.com/fixes/add", fix)
        .then(() => {
          // stopLoading()
          resolve();
        });
    });
  };
}
