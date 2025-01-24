# 프로젝트 제목 : Olympic Medal Tracker


---

## 목차 (Table of Contents)
1. [프로젝트 소개](#프로젝트-소개)
2. [설치 방법](#설치-방법)
3. [기능](#기능)
4. [기여 방법](#기여-방법)
5. [라이선스](#라이선스)

---

## 1. 프로젝트 소개

2024 파리 올림픽의 메달 집계를 관리하는 **Olympic Medal Tracker**를 개발했습니다.
지금까지 배운 리액트 컴포넌트, 이벤트 관리, 상태(state) 관리를 통해 CRUD 기능을 구현했습니다.

### 프로젝트의 목표

- 리액트 컴포넌트와 훅(useState)을 다루기
- 리액트에서 이벤트 관리하기
- 리액트의 state, props 를 확실히 이해하고 사용하기
- 이를 통해 기초 프로그래밍의 핵심이 되는 CRUD를 리액트에 적용하기

## 2.설치 방법

프로젝트를 실행하기 위한 설치 가이드

1. 저장소 클론:
   ```bash
   git clone https://github.com/사용자명/저장소명.git
   ```
2. 디펜던시 설치:
```bash
	npm install
```
3. 실행:
```bash
	npm start
```
 

## 3. 세부 설명 및 기능


#### 1. 제출 폼 UI 구현

- **설명**: 나라 이름과 금, 은, 동 메달 수를 입력할 수 있는 폼이 있습니다.
- **구체적인 기능**:
    - 폼에는 4개의 입력 필드가 있습니다.
        - 나라 이름을 입력할 텍스트 필드
        - 금메달, 은메달, 동메달 수를 입력할 숫자 필드 (각 필드는 0 이상의 숫자만 허용)
    - 폼 제출 버튼을 눌렀을 때 새로운 나라와 메달 수가 추가됩니다.
    - 제출 후 모든 입력 필드는 빈 값으로 초기화됩니다.
   

#### 2. 메달 집계 CRUD 기능

- **설명**: 폼에 입력된 데이터를 사용하여 국가별 메달 집계를 관리합니다. CRUD(Create, Read, Update, Delete) 기능을 통해 국가별 데이터를 추가, 조회, 수정, 삭제할 수 있어야 합니다.
- **구체적인 기능** :
    - **Create**: 폼 제출 시 새로운 나라와 해당 메달 수를 리스트에 추가합니다.
    - **Read**: 화면에 국가별 메달 집계를 리스트 형태로 보여줍니다.
    - **Update**: 이미 추가된 국가의 메달 수를 수정할 수 있는 기능입니다.
        - 수정 시 사용자가 나라 이름과 새로운 메달 수를 입력하고, 수정 버튼을 클릭하면 해당 국가의 메달 수가 업데이트됩니다.
    - **Delete**: 리스트에 표시된 나라 옆에 삭제 버튼을 추가하여, 해당 국가 정보를 삭제할 수 있게 합니다.

#### 3. 메달 집계 정렬

- **설명**: 리스트에 표시된 국가별 메달 집계를 금메달 수 기준으로 내림차순 정렬합니다.
- **구체적인 기능**:
    - 금메달 수가 높은 국가가 리스트의 상위에 표시됩니다.
    - 국가 추가, 수정, 삭제 시 리스트가 자동으로 재정렬됩니다.

#### 4. 레이아웃 설정

- **설명**: 화면 전체의 레이아웃을 설정하여 정돈된 UI를 만듭니다.
- **구체적인 기능**:
    - 전체 레이아웃의 가운데 정렬합니다.
    - 각 요소 간의 여백을 조정해서 깔끔하고 보기 좋은 레이아웃을 만듭니다.

#### 5. 컴포넌트 구조

- **설명**: 기능별로 컴포넌트를 분리하여 코드의 가독성과 재사용성을 높입니다.
- **구체적인 기능**:
    - 반복적으로 사용되는 UI 요소가 있다면 별도의 컴포넌트로 분리하여 사용하세요.
    - 예시: 메달을 입력하는 폼, 메달 집계 리스트, 리스트의 개별 항목 등을 각각의 컴포넌트로 구성할 수 있습니다.
- **분리한 컴포넌트**  

**1) App.jsx**

역할: 애플리케이션의 최상위 컴포넌트로, 전체 프로젝트의 중앙 허브 역할을 합니다.

- 주요 기능:
 1. 상태 관리:
	- 국가 데이터(countries)를 관리.
    - 데이터 추가, 수정, 삭제를 처리하는 함수 포함.
2. 다른 컴포넌트와의 연결:
		- MedalForm과 MedalList 컴포넌트를 포함.
        - 각각에 필요한 데이터를 전달하거나, 사용자 이벤트를 처리하는 함수를 props로 전달.

- 세부 설명:
		- addCountry: 국가 데이터를 추가. 중복된 국가명 방지 및 금메달 수 기준 정렬.
        - updateCountry: 기존 국가 데이터를 수정. 국가명이 존재하지 않을 경우 경고 메시지 출력.
		- deleteCountry: 특정 국가 데이터를 삭제.

- 구조:

```jsx
<MedalForm addCountry={addCountry} updateCountry={updateCountry} />
<MedalList countries={countries} deleteCountry={deleteCountry} />
```

- 전체 흐름:

MedalForm에서 데이터를 추가하거나 수정하면, App의 상태(countries)가 업데이트됨.
MedalList는 업데이트된 데이터를 테이블 형식으로 표시.


**2) MedalForm.jsx**

역할: 사용자가 국가 데이터를 입력하거나 수정할 수 있는 폼 컴포넌트입니다.

- 주요 기능:

1. 입력 필드 관리:
국가명, 금메달, 은메달, 동메달 수를 입력받음.
2. 추가/수정 모드 전환:
isUpdateMode 상태로 추가/수정 모드를 구분.
3. 데이터 전달:
addCountry와 updateCountry 함수를 통해 입력 데이터를 App 컴포넌트로 전달.

- 세부 설명:

formData 상태로 입력 데이터를 관리.
onSubmit 이벤트를 통해 데이터 제출.
검증 로직 포함:
국가명 공백 방지.
메달 수가 음수일 경우 경고.

- 구조:

```jsx
<form onSubmit={handleSubmit}>
  <input type="text" name="country" ... />
  <input type="number" name="gold" ... />
  ...
  <button type="submit">국가 추가</button>
  <button type="submit">업데이트</button>
</form>
```
- 전체 흐름:

사용자가 데이터를 입력하고 제출하면, App 컴포넌트로 데이터를 전달.
추가/수정 모드에 따라 addCountry 또는 updateCountry 호출.

**3) MedalItem.jsx**

역할: 각 국가 데이터를 표시하는 테이블 행 컴포넌트입니다.

- 주요 기능:

1. 데이터 표시:
국가명, 금메달 수, 은메달 수, 동메달 수를 테이블 행으로 렌더링.
2. 삭제 버튼:
삭제 버튼 클릭 시, deleteCountry 함수 호출로 특정 국가 데이터 삭제.

- 세부 설명:

country: 국가별 데이터 객체. ({ country: '한국', gold: 10, silver: 5, bronze: 3 })
index: 현재 행의 고유 인덱스.
deleteCountry: 부모 컴포넌트에서 전달된 삭제 함수.

- 구조:

```jsx
<tr>
  <td>{country.country}</td>
  <td>{country.gold}</td>
  ...
  <form onSubmit={handleSubmit}>
    <button type="submit">삭제</button>
  </form>
</tr>
```
- 전체 흐름:

각 국가 데이터를 테이블 행으로 출력.
삭제 버튼 클릭 시 deleteCountry(index) 호출로 데이터를 삭제.

**4) MedalList.jsx**

역할: 전체 국가 데이터를 테이블 형식으로 출력하는 목록 컴포넌트입니다.

- 주요 기능:

1. 테이블 헤더 렌더링:
국가명, 금메달, 은메달, 동메달, 삭제 버튼 열.
2. 데이터 목록 출력:
countries 배열을 순회하며 각 국가 데이터를 MedalItem 컴포넌트로 렌더링.
- 세부 설명:

countries: 국가 데이터 배열.
deleteCountry: 삭제 버튼 클릭 시 실행될 함수.

- 구조:

```jsx
<table>
  <thead>
    <tr>
      <th>국가명</th>
      <th>금메달</th>
      ...
    </tr>
  </thead>
  <tbody>
    {countries.map((country, index) => (
      <MedalItem
        key={index}
        country={country}
        index={index}
        deleteCountry={deleteCountry}
      />
    ))}
  </tbody>
</table>
```
- 전체 흐름:

countries 데이터를 순회하여 MedalItem을 렌더링.
삭제 버튼 클릭 시 deleteCountry 함수 호출.

 

#### 6. 중복 국가 처리
- **설명**: 동일한 국가가 이미 리스트에 있을 경우, 사용자에게 경고 메시지를 표시하여 중복된 데이터를 방지합니다.
- **구체적인 기능**:
    - 나라 이름이 기존 리스트에 존재할 경우, `alert`를 통해 사용자에게 중복 국가임을 알립니다.

#### 7. 존재하지 않는 국가 알림

- **설명**: 존재하지 않는 국가에 대한 데이터를 수정하려고 할 때 사용자에게 알림을 표시합니다.
- **구체적인 기능**:
    - 사용자가 수정하려는 나라 이름이 리스트에 없을 경우 `alert`로 "존재하지 않는 국가입니다"라는 메시지를 띄웁니다.

**요약**
App.jsx : 애플리케이션의 최상위 컴포넌트. 상태 관리 및 데이터 흐름 제어.
main.jsx : 애플리케이션 시작점. React 루트 생성 및 컴포넌트 렌더링.
MedalForm.jsx : 국가 데이터를 추가/수정하는 폼 컴포넌트.
MedalItem.jsx : 각 국가 데이터를 표시하는 테이블 행 컴포넌트.
MedalList.jsx 전체 국가 데이터를 테이블로 출력하는 컴포넌트.
    
## 4. 기여방법
작은 프로젝트에 관심을 가져주셔서 감사합니다! 
아래 단계를 따라 프로젝트에 기여할 수 있습니다.

1. Fork 이 저장소  
   GitHub에서 `Fork` 버튼을 클릭하여 이 저장소를 자신의 계정으로 복사합니다.

2. 저장소를 클론  
   복사한 저장소를 자신의 로컬 환경으로 클론합니다.
   ```bash
   git clone https://github.com/사용자명/저장소명.git
   ```
3. 새로운 브랜치를 생성
새로운 작업 내용을 구분하기 위해 새 브랜치를 생성합니다.
```bash
	git checkout -b feature/새로운-기능
 ```
4. 변경 사항 적용
새로운 기능을 추가하거나, 버그를 수정하고, 기존 코드를 개선합니다.
작업 중에는 기존 코드 스타일을 유지해주세요.

5. 변경 사항 커밋
작업 내용을 명확하게 설명하는 커밋 메시지를 작성합니다.

```bash
	git commit -m "새로운 기능 추가: 기능 설명"
```

6. 변경 사항 푸시
변경된 브랜치를 자신의 원격 저장소로 푸시합니다.

```bash
	git push origin feature/새로운-기능
```

7. Pull Request 생성
GitHub에서 "Pull Request" 버튼을 클릭하여 변경 내용을 제출합니다.

- 변경 내용에 대한 설명을 상세히 작성해주세요.
- 리뷰 요청이 있을 경우 적극적으로 응답해주세요.


## 5. 라이센스
이 프로젝트는 [MIT 라이센스](./LICENSE)를 따릅니다. 자세한 내용은 LICENSE 파일을 참고하세요.













# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
