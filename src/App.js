import React, { useState } from "react";
import "./styles.css";

const vehiclesemoji = {
  "🚕": "Taxi",
  "🚌": "Bus",
  "🚑": "Ambulance",
  "🚚": "Delivery Truck",
  "🚜": "Tractor",
  "🚁": "Helicopter"
};
export default function App() {
  const [searchvalue, searchevehicleempji] = useState();

  function searchvehicle(event) {
    const userinput = event.target.value;
    var searchvalue = vehiclesemoji[userinput];

    if (searchvalue === undefined) searchvalue = "Oops!not available";
    searchevehicleempji(searchvalue);
  }

  function showvehicle(item) {
    var userin = item;
    var searchvalue = vehiclesemoji[item];
    searchevehicleempji(searchvalue);
  }
  var vehiclearray = Object.keys(vehiclesemoji);
  return (
    <div className="App">
      <h1>Try Emojies</h1>
      <input placeholder="Type Emoji:" onChange={searchvehicle}></input>
      <h2>{searchvalue}</h2>
      <hr />
      <h3>Available Emojies!</h3>
      {vehiclearray.map((vehicle) => {
        return (
          <span
            onClick={() => showvehicle(vehicle)}
            key={vehicle}
            style={{ padding: "0.5rem", fontSize: "2.3rem", cursor: "pointer" }}
          >
            {vehicle}
          </span>
        );
      })}
    </div>
  );
}
