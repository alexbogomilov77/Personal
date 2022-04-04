import React from "react";
import { useDispatch, useSelector } from "react-redux";
//redux
import { selectTab } from "../../redux/actions/selectedItems.actions";
import { fetchCars } from "../../redux/actions/cars.actions";
//styles
import "./Sidebar.scss";

const Tabs = () => {
  const dispatch = useDispatch();

  const selectedTab = useSelector((state) => state.selectedItems.selectedTab);

  const handleClick = async (tab) => {
    await dispatch(selectTab(tab));
    dispatch(fetchCars());
  };

  return (
    <div className="categories">
      <span
        className={"category " + (selectedTab === 0 ? "active" : "")}
        onClick={() => handleClick(0)}
      >
        active
      </span>
      <span className="divider"> / </span>
      <span
        className={"category " + (selectedTab === 1 ? "active" : "")}
        onClick={() => handleClick(1)}
      >
        waiting
      </span>
    </div>
  );
};

export default Tabs;
