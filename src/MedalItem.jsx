import React from "react";
import "./css/MedalItem.css";

const MedalItem = ({ country, index, deleteCountry }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작(페이지 새로고침) 방지
    deleteCountry(index); // 삭제 함수 호출
  };

  return (
    <tr>
      <td>{country.country}</td>
      <td>{country.gold}</td>
      <td>{country.silver}</td>
      <td>{country.bronze}</td>
      <td>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="delete-button">
            삭제
          </button>
        </form>
      </td>
    </tr>
  );
};

export default MedalItem;
