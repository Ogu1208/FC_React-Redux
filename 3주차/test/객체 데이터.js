// 객체 데이터
const ogu = {
  name: 'Ogu',
  age: 24, 
  // 메소드(Method)
  getName: function() {   // 함수의 표현
    return this.name;
  }
};

const hisName =  ogu.getName();
console.log(hisName);  // Ogu
// 혹은
console.log(ogu.getName());  // HEROPY