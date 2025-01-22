import React from "react";
import "./css/MedalItem.css";

const MedalItem = ({ country, index, setEditingIndex, deleteCountry }) => {
  return (
    <tr>
      <td>{country.country}</td>
      <td>{country.gold}</td>
      <td>{country.silver}</td>
      <td>{country.bronze}</td>
      <td>
        <button onClick={() => setEditingIndex(index)} className="edit-button">
          수정
        </button>
        <button onClick={() => deleteCountry(index)} className="delete-button">
          삭제
        </button>
      </td>
    </tr>
  );
};

export default MedalItem;
