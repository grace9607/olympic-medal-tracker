import React, { useState } from "react";
import "./css/MedalForm.css";

const MedalForm = ({ addCountry }) => {
  const [formData, setFormData] = useState({
    country: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 숫자 값 검증 (0 이상이어야 함)
    if (
      formData.gold < 0 ||
      formData.silver < 0 ||
      formData.bronze < 0 ||
      formData.country.trim() === ""
    ) {
      alert("유효한 값을 입력하세요.");
      return;
    }

    addCountry({
      country: formData.country,
      gold: parseInt(formData.gold) || 0,
      silver: parseInt(formData.silver) || 0,
      bronze: parseInt(formData.bronze) || 0,
    });

    // 입력 필드 초기화
    setFormData({
      country: "",
      gold: "",
      silver: "",
      bronze: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="country"
        placeholder="국가명"
        value={formData.country}
        onChange={handleChange}
        className="input"
        required
      />
      <input
        type="number"
        name="gold"
        placeholder="금메달"
        value={formData.gold}
        onChange={handleChange}
        className="input"
        min="0"
      />
      <input
        type="number"
        name="silver"
        placeholder="은메달"
        value={formData.silver}
        onChange={handleChange}
        className="input"
        min="0"
      />
      <input
        type="number"
        name="bronze"
        placeholder="동메달"
        value={formData.bronze}
        onChange={handleChange}
        className="input"
        min="0"
      />
      <button type="submit" className="submit-button">
        국가 추가
      </button>
      <button type="submit" className="submit-button">
        업데이트
      </button>
    </form>
  );
};

export default MedalForm;
