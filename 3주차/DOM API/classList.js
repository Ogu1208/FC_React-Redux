// HTML 요소(Element) 검색/찾기
const boxEl = document.querySelector('.box');

// 요소의 클래스 정보 객체 활용!
// boxEl에서 classList클래스 정보를 가지고 있는 객체 내부에서 'active'클래스가 contains(포함)되어있는지
// 검사한 후 있으면 isContains에 true를, 없으면 false를 반환
boxEl.classList.add('active');    // active 클래스 추가
let isContains = boxEl.classList.contains('active');
console.log(isContains);  // true

boxEl.classList.remove('active');   // active 제거
isContains = boxEl.classList.contains('active');
console.log(isContains);  // false