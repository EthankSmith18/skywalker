import React from "react";
import { Outlet } from "react-router-dom";

function OnePerson() {
  return (
    <div className="card">
      <div className="card-body">
        <h1>One Person</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default OnePerson;
