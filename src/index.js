import React from "react";
import ReactDOM from "react-dom";
import "./asset/styles/index.scss";
import EmployeesTable from "./components/EmployeesTable";
import SignIn from "./screens/login/SignIn";

ReactDOM.render(
  <React.StrictMode>
    {/* <EmployeesTable customers={customers}/> */}
    <SignIn />
  </React.StrictMode>,
  document.getElementById("root")
);

