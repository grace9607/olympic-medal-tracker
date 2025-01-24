import React from "react";
import MedalItem from "./MedalItem";
import "./css/MedalList.css";

const MedalList = ({ countries, deleteCountry }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <MedalItem
            key={index}
            country={country}
            index={index}
            deleteCountry={deleteCountry}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MedalList;
