import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addProblem } from "../../redux/actions/problems.actions";

const ProblemModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const selectedFix = useSelector((state) => state.selectedItems.selectedFix);

  const [problem, setProblem] = useState({
    id: uuidv1(),
    fix_id: selectedFix,
    name: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProblem((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProblem(problem));
    closeModal(problem);
  };

  return (
    <div className="modal" data-testid="modal-body">
      <form className="modal-form flex-form" onSubmit={handleSubmit}>
        <div>
          <p className="input-label">name:</p>
          <input
            type="text"
            id="name"
            data-testid="name-input"
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-light"
          type="submit"
          data-testid="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProblemModal;
