import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Modal from "../modals/ProblemModal";
import { GrClose } from "react-icons/gr";
//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../redux/actions/problemsDetails.actions";
import {
  setLoader,
  selectProblem,
  selectProblemDetail
} from "../../redux/actions/selectedItems.actions";
//styles
import "./Problems.scss";

export const Problems = () => {
  const dispatch = useDispatch();

  const selectedFix = useSelector((state) => state.selectedItems.selectedFix);
  const problems = useSelector((state) => state.problems.problems);

  const [fetchedProblems, setFetchedProblems] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState("");
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    setFetchedProblems(problems);
    setSelectedProblem("");
    dispatch(setLoader(false));
  }, [problems]);

  const handleClick = (problem) => {
    dispatch(setLoader(true));
    setSelectedProblem(problem.id);
    dispatch(selectProblem(problem));
    dispatch(selectProblemDetail("actions"));
    dispatch(fetchDetails("actions", problem.id));
  };

  const handleSubmit = (problem) => {
    setFetchedProblems([...fetchedProblems, problem]);
    setModal(false);
  };

  const displayProblems = () =>
    fetchedProblems.map((el) => {
      return (
        <li
          key={el.id}
          data-testid="problems-list-item"
          onClick={() => handleClick(el)}
          className={el.id === selectedProblem ? "selected-problem" : ""}
        >
          {el.name}
        </li>
      );
    });

  return (
    <div className="problems">
      <p className="label">Problems</p>
      <ul className="problems-list">
        {fetchedProblems && selectedFix ? displayProblems() : ""}{" "}
      </ul>
      <button
        data-testid="new-problem"
        onClick={() => setModal(true)}
        className={"btn " + "btn-light " + (!selectedFix ? "disabled" : "")}
      >
        new
      </button>

      <ReactModal
        className="modal-wrapper"
        overlayClassName="modal-overlay"
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        ariaHideApp={false}
        onRequestClose={() => setModal(false)}
      >
        <h1 className="modal-header">Add new problem</h1>
        <Modal closeModal={(problem) => handleSubmit(problem)} />
        <button className="close-modal" onClick={() => setModal(false)}>
          <GrClose />
        </button>
      </ReactModal>
    </div>
  );
};

export default Problems;
