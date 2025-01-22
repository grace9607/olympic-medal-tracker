import React, { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import "./css/App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // 새로운 국가 데이터를 추가하는 함수
  const addCountry = (newCountry) => {
    // 🟨 국가명 중복 확인
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
    setCountries((prevCountries) => {
      const updatedCountries = [...prevCountries];
      updatedCountries[editingIndex] = updatedCountry;
      updatedCountries.sort((a, b) => b.gold - a.gold);
      return updatedCountries;
    });
    setEditingIndex(null);
  };

  // 국가 삭제 함수
  const deleteCountry = (index) => {
    setCountries((prevCountries) =>
      prevCountries.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="container">
      <h1 className="title">2024 파리 올림픽 메달 집계</h1>
      <MedalForm
        addCountry={addCountry}
        updateCountry={updateCountry}
        editingCountry={editingIndex !== null ? countries[editingIndex] : null}
        cancelEdit={() => setEditingIndex(null)}
      />
      <MedalList
        countries={countries}
        setEditingIndex={setEditingIndex}
        deleteCountry={deleteCountry}
      />
    </div>
  );
};

export default App;
