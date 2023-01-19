import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function People() {
  const { id } = useParams();
  const [people, setPeople] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      })
      .catch((err) => setPeople(null));
  }, [id]);

  return (
    <div className="card">
      {people ? (
        <div className="card-body">
          <h3>Name: {people.name}</h3>
          <h3>Climate: {people.birth_year}</h3>
          <h3>Gravity: {people.eye_color}</h3>
          <h3>Population: {people.mass}</h3>
        </div>
      ) : (
        <div className="card">
          <img
            src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F018%2F682%2Fobi-wan.jpg"
            alt="Obi Wan"
            className="card-img-body"
          />
          <div className="card-body d-flex justify-content-center">
            <div className="card-text">
              <h1 className="text-danger">These aren't the droids you're looking for</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default People;
