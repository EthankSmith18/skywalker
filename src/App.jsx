import React from "react";
import People from "./Components/People";
import Planets from "./Components/Planets";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import { Navigate, Routes, Route } from "react-router-dom";
import OnePlanet from "./Components/OnePlanet";
import OnePerson from "./Components/OnePerson";
import Error from "./Components/Error";
import "./bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <div className="container mt-3">
        <Routes>
          <Route path="planets/:id" element={<Planets />} />
          <Route path="people/:id" element={<People />} />
          <Route path="error" element={<Error />} />
          <Route path="/" element={<Navigate to="/people" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
