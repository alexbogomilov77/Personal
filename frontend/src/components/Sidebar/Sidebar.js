import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactModal from "react-modal";
import Modal from "../modals/NewCarModal";
//redux
import { fetchCars } from "../../redux/actions/cars.actions";
//styles
import "./Sidebar.scss";
//components
import Tabs from "./Tabs";
import CarsList from "./CarsList";
//assets
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();

  let cars = useSelector((state) => state.cars.cars);
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return cars ? (
    <div className="sidebar">
      <div className="logo">
        <img src={logo}></img>
        <p>GaragePanel</p>
      </div>

      <button onClick={() => setModal(true)} className="new btn btnDark">
        new
      </button>

      <Tabs />
      <CarsList cars={cars} />
      <ReactModal
        className="modal-wrapper"
        overlayClassName="modal-overlay"
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        ariaHideApp={false}
        onRequestClose={() => setModal(true)}
      >
        <h1 className="modalHeader">Add new car</h1>
        <Modal closeModal={() => setModal(true)} />
        <button
          className="closeModal btn btnColor"
          onClick={() => setModal(true)}
        >
          X
        </button>
      </ReactModal>
    </div>
  ) : (
    <div>
      <code>no cars in your garage!</code>
    </div>
  );
};

export default Sidebar;
