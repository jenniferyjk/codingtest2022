
//함수 선언
function helloFunc() {
	//실행 코드
	console.log(1234);
};

//함수 호출
helloFunc(); //1234

//함수 값 반환
function returnFunc() {
	return 123;
};

//변수에 할당하여 반환된 데이터 저장
let a = returnFunc();

console.log(a); //123


// 매개변수와 인수
//함수 선언!
function sum(a, b) { //a와 b는 매개변수(Parameters)
	//매개변수 : 데이터를 받아주는 매개체
	return a + b;
};

//재사용
let aa = sum(1, 2); //1과 2는 인수라고 함(Arguments)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(aa,b,c); // 3, 19, 6



// 함수 선언과 표현
// 기명(이름이 있는) 함수 -> 선언
function hello() {
	console.log('Hello~');
};

// 익명(이름이 없는) 함수 -> 표현
let world = function () {
	console.log('World~');
};


//함수 호출
hello();
world();



// 객체데이터 내에서의 함수 : 메소드(method)
//객체 데이터
const user = {
	name: 'JENNI',
	age: 28,
	// 메소드(method) : 객체데이터 내부의 함수를 의미
	getName: function() {
		return this.name;
	}
};

const userName = user.getName();
console.log(userName); //JENNI
//or 바로실행
console.log(user.getName()); //JENNI
