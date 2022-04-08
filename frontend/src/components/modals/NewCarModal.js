import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
//redux
import { useDispatch } from "react-redux";
import { addCar } from "../../redux/actions/cars.actions";
import { setLoader } from "../../redux/actions/selectedItems.actions";

const NewCarModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const carDetailsLabels = ["plate", "make", "model", "year", "engine"];

  const [car, setCar] = useState({
    _id: uuidv1(),
    status: 0,
    plate: "",
    make: "",
    model: "",
    year: "",
    engine: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCar((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoader(true));
    dispatch(addCar(car));
    closeModal(car);
  };

  const carDetailsList = () =>
    carDetailsLabels.map((item) => {
      return (
        <li key={item}>
          <p className="inputLabel">{item}:</p>
          <input type="text" id={item} onChange={handleChange} />
        </li>
      );
    });

  return (
    <div className="modal">
      <form className="modalForm" onSubmit={handleSubmit}>
        <ul>{carDetailsList()}</ul>
        <button className="btn btnLight" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCarModal;
