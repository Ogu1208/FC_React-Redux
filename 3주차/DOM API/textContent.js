const  boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);  // Box!!, content 중에서 text로만 이루어진 내용만 반환이 된다.

//  Setter, 값을 지정하는 용도
boxEl.textContent = 'Ogu?!';
console.log(boxEl.textContent);  // Ogu?!