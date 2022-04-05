import React from "react";

import Header from "./Header/Header";
import Details from "./Details/Details";
//styles
import "./Problem.scss";

export const Problem = () => {
  return (
    <div className="problem">
      <Header />
      <Details />
    </div>
  );
};

export default Problem;
