

//변수 선언
let a = 2;
let b = 5;

// 값의 재할당 (let)
a = 12;
console.log(a); //12

a = 999;
console.log(a); //999

//const -> 재할당 불가
const c = 12;
console.log(c); //12

c = 999;
console.log(b); // TypeError: Assignment to constant variable.



//예약어 : 변수 이름으로 사용 불가한 경우들

// let this = 'Hello'; //SyntaxError
// let if = 123; //SyntaxError
// let break = true; //SyntaxError