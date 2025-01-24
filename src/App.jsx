import React, { useState } from "react";
import MedalForm from "./MedalForm"; // 국가 추가/수정 폼 컴포넌트
import MedalList from "./MedalList"; // 국가 목록 컴포넌트
import "./css/App.css";

// 메인 컴포넌트 : 국가 데이터를 관리하는 상태와 국가 추가/수정/삭제 함수를 포함
const App = () => {
  // 국가 데이터를 관리하는 상태
  const [countries, setCountries] = useState([]);

  // 새로운 국가 데이터를 추가하는 함수
  const addCountry = (newCountry) => {
    // 국가명이 중복되는지 확인
    if (countries.some((country) => country.country === newCountry.country)) {
      alert("이미 추가된 국가입니다.");
      return;
    }

    // 새로운 국가 데이터를 추가하고 금메달 기준으로 정렬
    setCountries((prevCountries) => {
      const updatedCountries = [...prevCountries, newCountry]; // 기존 데이터 + 새 국가 데이터
      updatedCountries.sort((a, b) => b.gold - a.gold); // 금메달 수 기준 내림차순 정렬
      return updatedCountries; // 정렬된 데이터 반환
    });
  };

  // 기존 국가 데이터를 업데이트하는 함수
  const updateCountry = (updatedCountry) => {
    // 업데이트할 국가의 인덱스를 찾음
    const countryIndex = countries.findIndex(
      (country) => country.country === updatedCountry.country
    );

    // 국가가 존재하지 않을 경우 경고 메시지 출력
    if (countryIndex === -1) {
      alert("존재하지 않는 국가입니다.");
      return;
    }

    // 기존 데이터를 복사하여 해당 국가 데이터 수정
    setCountries((prevCountries) => {
      const updatedCountries = [...prevCountries];
      updatedCountries[countryIndex] = updatedCountry; // 수정된 데이터 적용
      updatedCountries.sort((a, b) => b.gold - a.gold); // 금메달 기준 내림차순 정렬
      return updatedCountries; // 정렬된 데이터 반환
    });
  };

  // 특정 국가 데이터를 삭제하는 함수
  const deleteCountry = (index) => {
    // 삭제할 인덱스를 제외한 나머지 데이터를 반환
    setCountries((prevCountries) =>
      prevCountries.filter((_, i) => i !== index)
    );
  };
  //화면 구성
  return (
    <div className="container">
      <h1 className="title">2024 파리 올림픽</h1>
      {/* 국가 추가/수정 폼 컴포넌트 */}
      <MedalForm addCountry={addCountry} updateCountry={updateCountry} />
      {/* 국가 목록 컴포넌트 */}
      <MedalList countries={countries} deleteCountry={deleteCountry} />
    </div>
  );
};

export default App;
