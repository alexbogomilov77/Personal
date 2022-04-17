import React, { useState, useEffect } from "react";
// import { FiTrash2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { v1 as uuidv1 } from "uuid";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  addDetail,
  deleteDetail
} from "../../../redux/actions/problemsDetails.actions";
import { setLoader } from "../../../redux/actions/selectedItems.actions";
//styles
import "./Details.scss";

export const Details = () => {
  const dispatch = useDispatch();
  const selectedProblem = useSelector(
    (state) => state.selectedItems.selectedProblem
  );
  const selectedProblemDetail = useSelector(
    (state) => state.selectedItems.selectedProblemDetail
  );
  const details = useSelector((state) => state.problemsDetails.details);

  const [fetchedDetails, setFetchedDetails] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setFetchedDetails(details);
    dispatch(setLoader(false));
  }, [details]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const detail = {
      id: uuidv1(),
      problem_id: selectedProblem.id,
      name,
      price,
      type: selectedProblemDetail
    };

    setFetchedDetails([...fetchedDetails, detail]);
    dispatch(addDetail(detail));
    setName("");
    setPrice("");
  };

  const handleDelete = (itemId) => {
    dispatch(deleteDetail(itemId, selectedProblemDetail));
    setFetchedDetails(fetchedDetails.filter((item) => item.id !== itemId));
  };

  const displayProblemDetails = () =>
    fetchedDetails.map((item) => {
      return (
        <li key={item.id} className="detail">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <RiDeleteBin6Line
            className="delete"
            onClick={() => handleDelete(item.id)}
          />
        </li>
      );
    });

  return (
    <div className="details-wrapper">
      <form className="form">
        <div className="input-block">
          <label className="input-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label className="input-label" htmlFor="value">
            Price:
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="submit-btn">
          <button
            className={
              "btn " + "btn-light " + (!selectedProblem ? "disabled" : "")
            }
            type="submit"
            onClick={handleSubmit}
          >
            add
          </button>
        </div>
      </form>

      <ul className="details">
        {fetchedDetails && selectedProblem ? displayProblemDetails() : ""}
      </ul>

      <div className="footer">
        <button
          className={
            "btn " + "btn-light " + (!selectedProblem ? "disabled" : "")
          }
        >
          export
        </button>
      </div>
    </div>
  );
};

export default Details;
