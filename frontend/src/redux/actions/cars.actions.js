// import baseUrl from "../../utils/axiosConfig";
import store from "../store";
import axios from "axios";

export const SET_CARS = "SET_CARS";

export function setCars(payload) {
  return { type: SET_CARS, payload };
}

export function fetchCars() {
  return (dispatch) => {
    new Promise((resolve) => {
      axios
        .get("https://app-garage-manager.herokuapp.com/cars")
        .then((response) => {
          const carsInSelectedTab = response.data.filter(
            (el) => el.status === store.getState().selectedItems.selectedTab
          );
          dispatch(setCars(carsInSelectedTab));
          resolve();
        });
    });
  };
}

export function addCar(car) {
  return () => {
    new Promise((resolve) => {
      axios
        .post("https://app-garage-manager.herokuapp.com/cars/add", car)
        .then(() => {
          resolve();
        });
    });
  };
}

export function changeCarStatus(id, status) {
  return (dispatch) => {
    new Promise((resolve) => {
      const changedStatus = { status: status === 0 ? 1 : 0 };
      axios
        .post(
          `https://app-garage-manager.herokuapp.com/cars/update/${id}`,
          changedStatus
        )
        .then(() => {
          dispatch(fetchCars());
          resolve();
        });
    });
  };
}
