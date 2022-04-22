import React from "react";
import Loader from "react-js-loader";
import "./App.scss";
//redux
import { useSelector } from "react-redux";

export const Load = () => {
  const isInitLoading = useSelector(
    (state) => state.selectedItems.isInitLoading
  );
  const isLoading = useSelector((state) => state.selectedItems.isLoading);
  const isSlowLoading = useSelector(
    (state) => state.selectedItems.isSlowLoading
  );

  return isInitLoading || isLoading || isSlowLoading ? (
    <div className="loader">
      <Loader
        type="rectangular-ping"
        bgColor={"#f67a65"}
        color={"#f67a65"}
        size={200}
      />
    </div>
  ) : (
    <></>
  );
};

export default Load;
