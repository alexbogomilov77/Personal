import React from "react";

//components
import Sidebar from "./components/Sidebar/Sidebar";
import Helper from "./components/Helper/Helper";
import Fixes from "./components/Fixes/Fixes";
import Problems from "./components/Problems/Problems";
import Problem from "./components/Problem/Problem";
import Load from "./Load";
//styles
import "./assets/styles/index.scss";
import "./App.scss";

export const App = () => {
  return (
    <div className="App">
      <Load />
      <Sidebar />
      <div className="dashboard">
        <Helper />
        <Fixes />
        <Problems />
        <Problem />
      </div>
    </div>
  );
};

export default App;
