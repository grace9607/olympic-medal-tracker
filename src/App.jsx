import React, { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import "./css/App.css";

const App = () => {
  const [countries, setCountries] = useState([]);

  // 새로운 국가 데이터를 추가하는 함수
  const addCountry = (newCountry) => {
    setCountries((prevCountries) => {
      // 금메달 기준으로 내림차순 정렬
      const updatedCountries = [...prevCountries, newCountry];
      updatedCountries.sort((a, b) => b.gold - a.gold);
      return updatedCountries;
    });
  };

  return (
    <div className="container">
      <h1 className="title">2024 파리 올림픽 메달 집계</h1>
      <MedalForm addCountry={addCountry} />
      <MedalList countries={countries} />
    </div>
  );
};

export default App;
