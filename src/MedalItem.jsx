import React from "react";
import "./css/MedalItem.css";

const MedalItem = ({ country }) => {
  return (
    <tr>
      <td>{country.country}</td>
      <td>{country.gold}</td>
      <td>{country.silver}</td>
      <td>{country.bronze}</td>
      <td>
        <form onSubmit={(e) => handleDelete(e, index)}>
          <button type="submit" className="delete-button">
            삭제
          </button>
        </form>
      </td>
    </tr>
  );
};

export default MedalItem;
