import React from "react";
import MedalItem from "./MedalItem"; // 각 국가 데이터를 나타내는 컴포넌트
import "./css/MedalList.css";

// 국가 목록을 표시하는 컴포넌트 : 국가별 메달 데이터를 테이블 형식으로 출력, 삭제 기능을 제공
const MedalList = ({ countries, deleteCountry }) => {
  return (
    <table className="table">
      {/* 국가 목록 테이블 헤더 : 국가명, 금메달, 은메달, 동메달, 액션 */}
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      {/* 국가 목록 테이블 본문 : 국가별 메달 데이터 출력 */}
      <tbody>
        {countries.map((country, index) => (
          <MedalItem
            key={index} // 고유 키로 인덱스 사용
            country={country} // 국가 데이터 전달
            index={index} // 현재 국가의 인덱스 전달
            deleteCountry={deleteCountry} // 삭제 함수 전달
          />
        ))}
      </tbody>
    </table>
  );
};

export default MedalList;
