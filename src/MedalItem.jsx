import React from "react";
import "./css/MedalItem.css";

// 국가별 메달 수를 표시하는 컴포넌트
const MedalItem = ({ country, index, deleteCountry }) => {
  // 삭제 버튼 클릭 시 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작(페이지 새로고침) 방지
    deleteCountry(index); // 부모 컴포넌트의 삭제 함수 호출
  };

  return (
    <tr>
      {/* 국가명, 메달 수를 표시 */}
      <td>{country.country}</td>
      <td>{country.gold}</td>
      <td>{country.silver}</td>
      <td>{country.bronze}</td>
      <td>
        {/* 삭제 버튼 */}
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
