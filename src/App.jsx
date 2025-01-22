import React, { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import "./css/App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  // const [editingIndex, setEditingIndex] = useState(null);

  // 새로운 국가 데이터를 추가하는 함수
  const addCountry = (newCountry) => {
    if (countries.some((country) => country.country === newCountry.country)) {
      alert("이미 추가된 국가입니다.");
      return;
    }

    setCountries((prevCountries) => {
      const updatedCountries = [...prevCountries, newCountry];
      updatedCountries.sort((a, b) => b.gold - a.gold);
      return updatedCountries;
    });
  };

  // 국가 업데이트 함수
  const updateCountry = (updatedCountry) => {
    const countryIndex = countries.findIndex(
      (country) => country.country === updatedCountry.country
    );

    if (countryIndex === -1) {
      alert("존재하지 않는 국가입니다."); // 국가가 없을 경우 경고 메시지
      return;
    }

    setCountries((prevCountries) => {
      const updatedCountries = [...prevCountries];
      updatedCountries[countryIndex] = updatedCountry;
      updatedCountries.sort((a, b) => b.gold - a.gold); // 정렬
      return updatedCountries;
    });
  };

  // 국가 삭제 함수
  const deleteCountry = (index) => {
    setCountries((prevCountries) =>
      prevCountries.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="container">
      <h1 className="title">2024 파리 올림픽</h1>
      <MedalForm addCountry={addCountry} updateCountry={updateCountry} />
      <MedalList countries={countries} deleteCountry={deleteCountry} />
    </div>
  );
};

export default App;
