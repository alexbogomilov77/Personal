import React from "react";
//redux
import { useSelector } from "react-redux";
//styles
import "./MainHeader.scss";

const MainHeader = () => {
  const selectedCar = useSelector((state) => state.selectedItems.selectedCar);
  const selectedFix = useSelector((state) => state.selectedItems.selectedFix);
  const selectedProblem = useSelector(
    (state) => state.selectedItems.selectedProblem
  );

  const displayMessage = () => {
    if (!selectedCar) {
      return "You need to select a car from sidebar.";
    } else if (selectedCar && !selectedFix) {
      return "Select a fix or create a new one.";
    } else if (selectedCar && selectedFix && !selectedProblem) {
      return "Choose already existing problem or create a new one";
    }
  };

  return (
    <div className="mainHeader">
      <p>{displayMessage()}</p>
    </div>
  );
};

export default MainHeader;
