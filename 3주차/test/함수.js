// 함수 선언
function helloFunc() {
  // 실행 코드
  console.log(1234);
}

// 함수 호출
helloFunc(); //1234

function returnFunc() {
  return 123;
}

let a = returnFunc();

console.log(a);

// 함수 선언
function sum(a,b) {   // a와 b는 매개변수 (Parameters)
  return a+b;
}

// 재사용
let x = sum(1, 2);  // 1과 2는 인수(Argument)
let y = sum(7, 12);
let z = sum(2, 4);

console.log(a, b, c);  // 3, 19, 6