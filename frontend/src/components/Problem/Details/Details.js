import React, { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { v1 as uuidv1 } from "uuid";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  addDetail,
  deleteDetail
} from "../../../redux/actions/problemsDetails.actions";
//styles
import "./Details.scss";

export default function Details() {
  const dispatch = useDispatch();
  // const { setLoading } = useContext(LoadingContext)
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
  }, [details]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
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
    // setLoading(true);
    dispatch(deleteDetail(itemId, selectedProblemDetail));
    setFetchedDetails(fetchedDetails.filter((item) => item.id !== itemId));
  };

  const displayProblemDetails = () =>
    fetchedDetails.map((item) => {
      return (
        <li key={item.id} className="detail">
          <p className="detailName">{item.name}</p>
          <p className="detailValue">{item.price}</p>
          <div className="deleteDetail" onClick={() => handleDelete(item.id)}>
            <FiTrash2 />
          </div>
        </li>
      );
    });

  return (
    <div className="detailsWrapper">
      <form className="form">
        <div className="inputBlock">
          <label className="inputLabel" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputBlock">
          <label className="inputLabel" htmlFor="value">
            Price:
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="submitBtn">
          <button className="btn btnLight" type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>

      <ul className="details">
        {fetchedDetails && selectedProblem ? displayProblemDetails() : ""}
      </ul>

      <div className="footer">
        <button className="btn btnLight">complete</button>
      </div>
    </div>
  );
}
