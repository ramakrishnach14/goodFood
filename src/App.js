import "./styles.css";
import foodData from "./foodData";
import { useState } from "react";

export default function App() {
  let foodType = Object.keys(foodData);
  let [details, setDetails] = useState([]);

  function getDetails(foodType) {
    setDetails(foodData[foodType]);
  }

  console.log(details);

  return (
    <div className="App">
      <div className="container">
        <div>
          <h2>Good Food in Hyderabad</h2>
          <h3>
            Check out my favorite places to eat food , select below to get the
            places list
          </h3>
          {foodType.map((food, index) => {
            return (
              <button
                key={index}
                className="btn-class"
                onClick={() => getDetails(food)}
              >
                {food}
              </button>
            );
          })}

          <hr />
          {details.map((place, index) => {
            return (
              <div key={index} className="placeData">
                <h2>{place.placeName}</h2>
                <h3>{place.address}</h3>
                <h3>{place.rating}/5</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
