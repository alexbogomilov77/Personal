import React, { useEffect, useState } from "react";
import moment from "moment";
import { v1 as uuidv1 } from "uuid";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
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
  const selectedCar = useSelector((state) => state.cars.cars);
  const fixes = useSelector((state) => state.fixes.fixes);

  const [selectedFix, setSelectedFix] = useState(null);
  const [fetchedFixes, setFetchedFixes] = useState([]);

  useEffect(() => {
    dispatch(selectFix(null));
    //to improve method above it is clearing fixes
    //after selecting another car and go back to previous selected
    setFetchedFixes(fixes);
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
    // setLoading(true);
    dispatch(emptyProblems());
    setSelectedFix(id);
    dispatch(fetchProblems(id));
    dispatch(selectFix(id));
  };

  const displayFixes = () =>
    fetchedFixes.map((el) => {
      let day = new Date(el.start_date).getUTCDate();
      let month = new Date(el.start_date).getUTCMonth();
      let year = new Date(el.start_date).getUTCFullYear();
      let date = `${day}.${month}.${year}`;
      return (
        <li
          key={el.id}
          onClick={() => handleClick(el.id)}
          className={"fix " + (el.id === selectedFix ? "selectedFix" : "")}
        >
          {date}
        </li>
      );
    });

  return (
    <div className="fixesWrapper">
      {/* <p className="label">Fixes</p> */}
      <form className="form">
        <button
          className="newFix btn btnWhite"
          type="submit"
          onClick={() => handleSubmit()}
        >
          +
        </button>
      </form>
      <ul className="fixes">{fetchedFixes ? displayFixes() : ""}</ul>
    </div>
  );
};

export default Fixes;
