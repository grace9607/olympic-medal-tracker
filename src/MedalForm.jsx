import React, { useState } from "react";
import "./css/MedalForm.css";

const MedalForm = ({ addCountry, updateCountry }) => {
  const [formData, setFormData] = useState({
    country: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  const [isUpdateMode, setIsUpdateMode] = useState(false); // 추가/업데이트 모드 구분

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.country.trim() === "" ||
      formData.gold < 0 ||
      formData.silver < 0 ||
      formData.bronze < 0
    ) {
      alert("유효한 값을 입력하세요.");
      return;
    }

    if (isUpdateMode) {
      // 업데이트 모드일 경우
      updateCountry({
        country: formData.country,
        gold: parseInt(formData.gold) || 0,
        silver: parseInt(formData.silver) || 0,
        bronze: parseInt(formData.bronze) || 0,
      });
    } else {
      // 추가 모드일 경우
      addCountry({
        country: formData.country,
        gold: parseInt(formData.gold) || 0,
        silver: parseInt(formData.silver) || 0,
        bronze: parseInt(formData.bronze) || 0,
      });
    }

    // 입력 필드 초기화 및 모드 변경
    setFormData({ country: "", gold: "", silver: "", bronze: "" });
    setIsUpdateMode(false);
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
      <div className="button-group">
        <button
          type="submit"
          className="submit-button"
          onClick={() => setIsUpdateMode(false)}
        >
          국가 추가
        </button>
        <button
          type="submit"
          className="submit-button"
          onClick={() => setIsUpdateMode(true)}
        >
          업데이트
        </button>
      </div>
    </form>
  );
};

export default MedalForm;
