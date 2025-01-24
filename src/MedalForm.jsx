import React, { useState } from "react";
import "./css/MedalForm.css";

const MedalForm = ({ addCountry, updateCountry }) => {
  // 입력 필드 데이터를 관리하는 상태
  const [formData, setFormData] = useState({
    country: "", // 국가명
    gold: "",
    silver: "", // 메달 수
    bronze: "",
  });

  // 추가/업데이트 모드를 구분하는 상태
  const [isUpdateMode, setIsUpdateMode] = useState(false); // 추가/업데이트 모드 구분

  // 입력 필드 값이 변경될 때 호출되는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // 입력 필드 데이터 업데이트
  };

  // 폼을 제출할 때 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작(페이지 새로고침) 방지

    // 유효성 검사 - 국가명은 공백일 수 없고(비어있거나), 메달 수는 0 이상(음수일 경우) 이어야 함 경고메세지 출력
    if (
      formData.country.trim() === "" || // 국가명이 공백일 경우
      formData.gold < 0 ||
      formData.silver < 0 || // 메달 수가 음수일 경우
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
        silver: parseInt(formData.silver) || 0, // 입력값이 없을 경우 0으로 초기화
        bronze: parseInt(formData.bronze) || 0,
      });
    } else {
      // 추가 모드일 경우
      addCountry({
        country: formData.country,
        gold: parseInt(formData.gold) || 0,
        silver: parseInt(formData.silver) || 0, // 입력값이 없을 경우 0으로 초기화
        bronze: parseInt(formData.bronze) || 0,
      });
    }

    // 입력 필드 초기화 및 모드 변경
    setFormData({ country: "", gold: "", silver: "", bronze: "" });
    setIsUpdateMode(false); // 추가 모드로 전환
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* 국가명 입력 필드 */}
      <input
        type="text" // 입력 타입 텍스트 입력
        name="country" // formData 객체의 country 프로퍼티에 대한 이름 (country 키와 연결)
        placeholder="국가명" // 입력창에 표시할 텍스트
        value={formData.country} // 입력값
        onChange={handleChange} // 입력값이 변경될 때 호출되는 함수
        className="input"
        required // 필수 입력 필드
      />

      {/* 메달 수 입력 필드 */}
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

      {/* 버튼 그룹 */}
      <div className="button-group">
        {/* 국가 추가 버튼 */}
        <button
          type="submit" // 버튼 클릭 시 폼 제출
          className="submit-button"
          onClick={() => setIsUpdateMode(false)} // 추가 모드로 전환
        >
          국가 추가
        </button>

        {/* 국가 업데이트 버튼 */}
        <button
          type="submit"
          className="submit-button"
          onClick={() => setIsUpdateMode(true)} // 업데이트 모드로 전환
        >
          업데이트
        </button>
      </div>
    </form>
  );
};

export default MedalForm;
