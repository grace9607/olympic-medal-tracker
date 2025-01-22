import React, { useState, useEffect } from "react";
import "./css/MedalForm.css";

const MedalForm = ({
  addCountry,
  updateCountry,
  editingCountry,
  cancelEdit,
}) => {
  const [formData, setFormData] = useState({
    country: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  // 수정 중인 데이터 로드
  useEffect(() => {
    if (editingCountry) {
      setFormData(editingCountry);
    } else {
      setFormData({
        country: "",
        gold: "",
        silver: "",
        bronze: "",
      });
    }
  }, [editingCountry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 숫자 값 검증
    if (
      formData.gold < 0 ||
      formData.silver < 0 ||
      formData.bronze < 0 ||
      formData.country.trim() === ""
    ) {
      alert("유효한 값을 입력하세요.");
      return;
    }

    if (editingCountry) {
      updateCountry(formData); // 수정 모드에서는 업데이트
    } else {
      addCountry({
        country: formData.country,
        gold: parseInt(formData.gold) || 0,
        silver: parseInt(formData.silver) || 0,
        bronze: parseInt(formData.bronze) || 0,
      });
    }

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
        disabled={!!editingCountry} // 수정 시 국가명 비활성화
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
        {editingCountry ? "업데이트" : "국가 추가"}
      </button>
      {editingCountry && (
        <button type="button" onClick={cancelEdit} className="cancel-button">
          취소
        </button>
      )}
    </form>
  );
};

export default MedalForm;
