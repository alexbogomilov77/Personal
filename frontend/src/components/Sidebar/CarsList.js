import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GrSync } from "react-icons/gr";
//redux
import { changeCarStatus } from "../../redux/actions/cars.actions";
import { fetchFixes } from "../../redux/actions/fixes.actions";
import {
  setLoader,
  setSlowLoader,
  selectCar
} from "../../redux/actions/selectedItems.actions";
import { setDetails } from "../../redux/actions/problemsDetails.actions";
//styles
import "./CarsList.scss";

const CarsList = (props) => {
  const cars = props.cars;
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setActiveLink(null);
    dispatch(setLoader(false));
  }, [cars]);

  const isActive = function (id) {
    if (id === activeLink) return "active";
    else {
      return "";
    }
  };

  const changeStatus = (id, status) => {
    dispatch(setLoader(true));
    dispatch(changeCarStatus(id, status));
  };

  const handleClick = (id) => {
    dispatch(setSlowLoader(true));
    setActiveLink(id);
    dispatch(fetchFixes(id));
    dispatch(selectCar(id));
    dispatch(setDetails(null));
    setTimeout(() => {
      dispatch(setSlowLoader(false));
    }, 500);
  };

  return (
    <ul className="cars">
      {cars.map((car) => (
        <li key={car._id} className={"car " + isActive(car._id)}>
          {car._id === activeLink ? (
            <div
              className="change-btn"
              onClick={() => changeStatus(car._id, car.status)}
            >
              <GrSync />
            </div>
          ) : (
            ""
          )}
          <div className="name" onClick={() => handleClick(car._id)}>
            <p className="make">
              {car.make} {car.model}
            </p>
            <p className="plate">{car.plate}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
