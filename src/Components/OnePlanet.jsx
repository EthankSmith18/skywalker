import React from "react";
import { Outlet } from "react-router-dom";

function OnePlanet() {
  return (
    <div className="card">
      <div className="card-body">
        <h1>One Planet</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default OnePlanet;
