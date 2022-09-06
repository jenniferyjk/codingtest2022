# TIL(Today-I-Learned)



### 🗓️220906 (JS 선행)

#### 🌐 표기법

👉 **dash-case(kebab-case)**

주 사용 :  ****`HTML` `CSS`

**the-quick-brown-fox-jumps-over-the-lazy-dog**

👉 **snake_case**

주 사용 :  ****`HTML` `CSS`

**the_quick_brown_fox_jumps_over_the_lazy_dog**

👉 **camelCase**

주 사용 : `JS`

**theQuickBrownFoxJumpsOverTheLazyDog**

👉 **PascalCase**

주 사용 : `JS`

**TheQuickBrownFoxJumpsOverTheLazyDog**



#### 🌐 Zero-based Numbering

👉 특수한 경우를 제외하고 **숫자는 0부터 세기** 시작한다

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // 출력 : 'Apple'
console.log(fruits[1]); // 출력 : 'Banana'

console.log(new Date('2021-01-30').getDay()); // 출력 : 6, 토요일
console.log(new Date('2021-01-31').getDay()); // 출력 : 0, 일요일
```



#### 🌐 자료형(DataType)

1️⃣ **String(문자열)**

: 따옴표를 사용한다

```javascript
let myName = "JENNI";
let email = 'dev.jennik@gmail.com';
let hello = `Hello ${myName}!`;
// 백틱: 데이터를 끌어다 쓸 수 있음(보간법)

console.log(myName); // JENNI
console.log(email); // dev.jennik@gmail.com
console.log(hello); // Hello JENNI!
```

2️⃣ **NUMBER(숫자 데이터)**

: 정수 및 부동 소수점 숫자를 나타낸다

```javascript
let number = 123;
let opacity = 1.57;

console.log(number); //123
console.log(opacity); //1.57

//따옴표가 있으면 '문자열'로 인식한다
```

3️⃣ **Boolean**

: true, false 두 가지 값을 갖는 논리데이터

```javascript
let checked  = true;
let isShow = false;

console.log(checked); //true
console.log(isShow); //false
```

4️⃣ **Undefined**

: 값이 할당되지 않은 상태

```javascript
let undef;
let obj = { abc: 123 };

console.log(undef); //undefined
console.log(obj.abc); //123
console.log(obj.xyz); // undefined
```

5️⃣ **null**

: 어떤 값이 의도적으로 비어있음을 의미한다

```javascript
let empty = null;

console.log(empty); //null
```

6️⃣ **Object(객체 데이터)**

: 여러 데이터를 Key:Value 형태로 저장한다 {}

```javascript
let user = {
	// Key:Value,
	name: 'JENNI',
	age: 85 ,
	isValid: true,
};

// 사용법
console.log(user.name); //JENNI
console.log(user.age); //85
console.log(user.isValid); //true
```

7️⃣ **Array(배열 데이터)**

: 여러 데이터를 순차적으로 저장한다 []

```javascript
let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
```



#### 🌐 변수(Variables)

👉 데이터를 저장하고 참조(사용)하는 메모리 공간

​	`let` `const` `var`

👉 **변수**

```javascript
//변수 선언
let a = 2;
let b = 5;

// 값의 재할당 (let)
let a = 12;
console.log(a); //12

a = 999;
console.log(a); //999

//const -> 재할당 불가
const b = 12;
console.log(b); //12

b = 999;
console.log(b); // TypeError: Assignment to constant variable.
```

⚠️ **예약어**

: 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어

```javascript
let this = 'Hello'; //SyntaxError
let if = 123; //SyntaxError
let break = true; //SyntaxError
```



#### 🌐 함수(Function)

👉 특정 동작(기능)을 수행하는 일부 코드의 **집합(부분)**

```javascript
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
```

👉 **매개변수와 인수**

```javascript
//함수 선언!
function sum(a, b) { //a와 b는 매개변수(Parameters)
	//매개변수 : 데이터를 받아주는 매개체
	return a + b;
};

//재사용
let a = sum(1, 2); //1과 2는 인수라고 함(Arguments)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a,b,c); // 3, 19, 6
```

👉 **함수 선언 vs 표현**

```javascript
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
```

👉 **객체 데이터 내에서의 함수**

```javascript
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
```