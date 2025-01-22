import React, { useState } from "react";
import "./App.css"; // 스타일 파일을 import

const App = () => {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  // 입력 필드 값에 대한 에러 메시지
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // 입력 필드 값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 국가 추가
  const handleAddCountry = () => {
    if (!formData.country) return alert("국가 이름을 입력하세요.");
    if (!formData.gold || !formData.silver || !formData.bronze)
      return alert("0이상의 숫자를 입력해주세요.");
    setCountries([
      ...countries,
      {
        country: formData.country,
        gold: parseInt(formData.gold) || 0,
        silver: parseInt(formData.silver) || 0,
        bronze: parseInt(formData.bronze) || 0,
      },
    ]);
    setFormData({ country: "", gold: "", silver: "", bronze: "" });
  };

  // 국가 업데이트 준비
  const handleEdit = (index) => {
    const countryToEdit = countries[index];
    setFormData({
      country: countryToEdit.country,
      gold: countryToEdit.gold,
      silver: countryToEdit.silver,
      bronze: countryToEdit.bronze,
    });
    setIsEditing(true);
    setEditIndex(index);
  };

  // 국가 업데이트
  const handleUpdateCountry = () => {
    const updatedCountries = [...countries];
    updatedCountries[editIndex] = {
      country: formData.country,
      gold: parseInt(formData.gold) || 0,
      silver: parseInt(formData.silver) || 0,
      bronze: parseInt(formData.bronze) || 0,
    };
    setCountries(updatedCountries);
    setIsEditing(false);
    setEditIndex(null);
    setFormData({ country: "", gold: "", silver: "", bronze: "" });
  };

  // 국가 삭제
  const handleDelete = (index) => {
    const newCountries = [...countries];
    newCountries.splice(index, 1);
    setCountries(newCountries);
  };

  return (
    <div className="container">
      <h1 className="title">2024 파리 올림픽</h1>
      <div className="form_input">
        <input
          type="text"
          name="country"
          placeholder="국가명"
          value={formData.country}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="gold"
          placeholder="금메달"
          value={formData.gold}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="silver"
          placeholder="은메달"
          value={formData.silver}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="bronze"
          placeholder="동메달"
          value={formData.bronze}
          onChange={handleChange}
          className="input"
        />
        <button onClick={handleAddCountry} className="add-button">
          국가 추가
        </button>
        <button onClick={handleUpdateCountry} className="add-button">
          업데이트
        </button>
      </div>
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
            <tr key={index}>
              <td>{country.country}</td>
              <td>{country.gold}</td>
              <td>{country.silver}</td>
              <td>{country.bronze}</td>
              <td>
                <button
                  onClick={() => handleDelete(index)}
                  className="delete-button"
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
