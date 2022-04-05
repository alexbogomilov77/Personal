import React, { useState, useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { selectProblemDetail } from "../../../redux/actions/selectedItems.actions";
import { fetchDetails } from "../../../redux/actions/problemsDetails.actions";
//styles
import "./Header.scss";

export default function Header() {
  const dispatch = useDispatch();
  // const { setLoading } = useContext(LoadingContext)
  const selectedProblem = useSelector(
    (state) => state.selectedItems.selectedProblem
  );
  const selectedProblemDetail = useSelector(
    (state) => state.selectedItems.selectedProblemDetail
  );

  const [selectedBtn, setSelectedBtn] = useState(null);
  const buttons = [
    {
      id: "actions",
      position: "left"
    },
    {
      id: "parts",
      position: "right"
    }
  ];

  useEffect(() => {
    setSelectedBtn(selectedProblemDetail);
  }, [selectedProblemDetail]);

  const handleClick = (id) => {
    // setLoading(true);
    setSelectedBtn(id);
    dispatch(selectProblemDetail(id));
    dispatch(fetchDetails(id, selectedProblem.id));
  };

  const displayToggleButtons = () =>
    buttons.map((item) => {
      return (
        <div
          className={
            "btnSwitch " +
            "btnSwitch-" +
            item.position +
            " " +
            (item.id === selectedBtn ? "selected" : "")
          }
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          {item.id}
        </div>
      );
    });

  return (
    <div className="header">
      <span className="label">
        {selectedProblem ? selectedProblem.name : ""}
      </span>

      <div className="switchBtns">{displayToggleButtons()}</div>
    </div>
  );
}
