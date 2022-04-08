import React, { useEffect, useState } from "react";
import moment from "moment";
import { v1 as uuidv1 } from "uuid";
import { getDate } from "../../utils/dates";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  setLoader,
  selectFix,
  emptyProblems
} from "../../redux/actions/selectedItems.actions";
import { addFix } from "../../redux/actions/fixes.actions";
import { fetchProblems } from "../../redux/actions/problems.actions";
//styles
import "./Fixes.scss";

const Fixes = () => {
  const dispatch = useDispatch();
  // const { setLoading } = useContext(LoadingContext)
  const selectedCar = useSelector((state) => state.selectedItems.selectedCar);
  const fixes = useSelector((state) => state.fixes.fixes);

  const [selectedFix, setSelectedFix] = useState(null);
  const [fetchedFixes, setFetchedFixes] = useState([]);

  useEffect(() => {
    dispatch(selectFix(null));
    //to improve method above it is clearing fixes
    //after selecting another car and go back to previous selected
    setFetchedFixes(fixes);
    dispatch(setLoader(false));
  }, [fixes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    const fix = {
      id: uuidv1(),
      car_id: selectedCar,
      start_date: moment().utc().toDate()
    };

    setFetchedFixes([...fetchedFixes, fix]);
    dispatch(addFix(fix));
  };

  const handleClick = (id) => {
    dispatch(setLoader(true));
    dispatch(emptyProblems());
    setSelectedFix(id);
    dispatch(fetchProblems(id));
    dispatch(selectFix(id));
  };

  const displayFixes = () =>
    fetchedFixes.map((el) => {
      return (
        <li
          key={el.id}
          onClick={() => handleClick(el.id)}
          className={"fix " + (el.id === selectedFix ? "selected-fix" : "")}
        >
          {getDate(el)}
        </li>
      );
    });

  return (
    <div className="fixes-wrapper">
      <p className="label">Fixes</p>
      <ul className="fixes">{fetchedFixes ? displayFixes() : ""}</ul>
      <form className="form">
        <button
          className={
            "btn " + "btnWhite " + "new-fix " + (!selectedCar ? "disabled" : "")
          }
          type="submit"
          onClick={handleSubmit}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default Fixes;
