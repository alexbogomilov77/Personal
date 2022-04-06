import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Modal from "../modals/ProblemModal";
//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../redux/actions/problemsDetails.actions";
import {
  selectProblem,
  selectProblemDetail
} from "../../redux/actions/selectedItems.actions";
//styles
import "./Problems.scss";

export default function Navigation() {
  const dispatch = useDispatch();
  // const { setLoading } = useContext(LoadingContext)

  const selectedFix = useSelector((state) => state.selectedItems.selectedFix);
  const problems = useSelector((state) => state.problems.problems);

  const [fetchedProblems, setFetchedProblems] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState("");
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    setFetchedProblems(problems);
    setSelectedProblem("");
  }, [problems]);

  const handleClick = (problem) => {
    // setLoading(true)
    setSelectedProblem(problem.id);
    dispatch(selectProblem(problem));
    dispatch(selectProblemDetail("actions"));
    dispatch(fetchDetails("actions", problem.id));
  };

  const handleSubmit = (problem) => {
    setFetchedProblems([...fetchedProblems, problem]);
    setModal(false);
    // setLoading(true)
  };

  const displayProblems = () =>
    fetchedProblems.map((el) => {
      return (
        <li
          key={el.id}
          onClick={() => handleClick(el)}
          className={el.id === selectedProblem ? "selectedProblem" : ""}
        >
          {el.name}
        </li>
      );
    });

  return (
    <div className="problems">
      {/* <p className="label">Problems</p> */}
      <button onClick={() => setModal(true)} className="btn btnLight">
        new
      </button>

      <ul> {fetchedProblems && selectedFix ? displayProblems() : ""} </ul>

      <ReactModal
        className="modal-wrapper"
        overlayClassName="modal-overlay"
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        ariaHideApp={false}
        onRequestClose={() => setModal(false)}
      >
        <h1 className="modalHeader">Add new problem</h1>
        <Modal closeModal={(problem) => handleSubmit(problem)} />
        <button
          className="closeModal btn btnColor"
          onClick={() => setModal(false)}
        >
          X
        </button>
      </ReactModal>
    </div>
  );
}
