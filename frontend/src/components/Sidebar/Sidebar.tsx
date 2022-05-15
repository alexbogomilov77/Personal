import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Modal from "../modals/NewCarModal";
import { GrClose } from "react-icons/gr";
//redux
import { AppState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/actions/cars.actions";
//components
import Tabs from "./Tabs";
import CarsList from "./CarsList";
//styles
import "./Sidebar.scss";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state: AppState) => state.cars.cars);

  const [fetchedCars, setFetchedCars] = useState<Array<object>>([]);
  const [showModal, setModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  useEffect(() => {
    setFetchedCars(cars);
  }, [cars]);

  const closeAndSet = (car) => {
    setModal(false);
    setFetchedCars([...fetchedCars, car]);
  };

  return fetchedCars ? (
    <div className="sidebar">
      <div className="logo">
        <img src={logo}></img>
        <p>Garage</p>
        <p className="light">Manager</p>
      </div>

      <button onClick={() => setModal(true)} className="new btn btn-dark">
        new
      </button>

      <Tabs />
      <CarsList cars={fetchedCars} />
      <ReactModal
        className="modal-wrapper"
        overlayClassName="modal-overlay"
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        ariaHideApp={false}
        onRequestClose={() => setModal(false)}
      >
        <h1 className="modal-header">Add new car</h1>
        <Modal closeModal={(car: object) => closeAndSet(car)} />
        <button className="close-modal" onClick={() => setModal(false)}>
          <GrClose />
        </button>
      </ReactModal>
    </div>
  ) : (
    <div className="empty-sidebar"></div>
  );
};

export default Sidebar;
