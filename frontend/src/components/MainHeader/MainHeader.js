import React from "react";
//redux
import { useSelector } from "react-redux";
//styles
import "./MainHeader.scss";

const MainHeader = () => {
  const selectedCar = useSelector((state) => state.cars.cars);
  const selectedFix = useSelector((state) => state.fixes.cars);
  const selectedProblem = useSelector((state) => state.selectedItems.cars);

  const displayMessage = () => {
    if (!selectedCar) {
      return "You need to selected a car from the list";
    } else if (selectedCar && !selectedFix) {
      return "see previous Fixes or create a new one";
    } else if (selectedCar && selectedFix && !selectedProblem) {
      return "choose already existing problem or a new one";
    }
  };

  return (
    <div className="mainHeader">
      <p>{displayMessage()}</p>
    </div>
  );
};

export default MainHeader;
