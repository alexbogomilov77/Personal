import React, { useState, useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  setLoader,
  selectProblemDetail
} from "../../../redux/actions/selectedItems.actions";
import { fetchDetails } from "../../../redux/actions/problemsDetails.actions";
//styles
import "./Header.scss";

export const Header = () => {
  const dispatch = useDispatch();

  const selectedProblem = useSelector(
    (state) => state.selectedItems.selectedProblem
  );
  const selectedProblemDetail = useSelector(
    (state) => state.selectedItems.selectedProblemDetail
  );

  const [selectedBtn, setSelectedBtn] = useState(null);

  useEffect(() => {
    setSelectedBtn(selectedProblemDetail);
  }, [selectedProblemDetail]);

  const handleClick = (type) => {
    dispatch(setLoader(true));
    setSelectedBtn(type);
    dispatch(selectProblemDetail(type));
    dispatch(fetchDetails(type, selectedProblem.id));
  };

  return (
    <div className="header">
      <span className="label">
        {selectedProblem ? selectedProblem.name : ""}
      </span>

      <div className={"switch-btns " + (!selectedProblem ? "disabled" : "")}>
        <div
          className={
            "btn-switch left " + (selectedBtn === "actions" ? "selected" : "")
          }
          data-testid="actions-btn"
          onClick={() => handleClick("actions")}
        >
          actions
        </div>
        <div
          className={
            "btn-switch right " + (selectedBtn === "parts" ? "selected" : "")
          }
          data-testid="parts-btn"
          onClick={() => handleClick("parts")}
        >
          parts
        </div>
      </div>
    </div>
  );
};

export default Header;
