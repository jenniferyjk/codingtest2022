# TIL(Today-I-Learned)



### ποΈ220906 (JS μ ν)

#### π νκΈ°λ²

π **dash-case(kebab-case)**

μ£Ό μ¬μ© :  ****`HTML` `CSS`

**the-quick-brown-fox-jumps-over-the-lazy-dog**

π **snake_case**

μ£Ό μ¬μ© :  ****`HTML` `CSS`

**the_quick_brown_fox_jumps_over_the_lazy_dog**

π **camelCase**

μ£Ό μ¬μ© : `JS`

**theQuickBrownFoxJumpsOverTheLazyDog**

π **PascalCase**

μ£Ό μ¬μ© : `JS`

**TheQuickBrownFoxJumpsOverTheLazyDog**



#### π Zero-based Numbering

π νΉμν κ²½μ°λ₯Ό μ μΈνκ³  **μ«μλ 0λΆν° μΈκΈ°** μμνλ€

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // μΆλ ₯ : 'Apple'
console.log(fruits[1]); // μΆλ ₯ : 'Banana'

console.log(new Date('2021-01-30').getDay()); // μΆλ ₯ : 6, ν μμΌ
console.log(new Date('2021-01-31').getDay()); // μΆλ ₯ : 0, μΌμμΌ
```



#### π μλ£ν(DataType)

1οΈβ£ **String(λ¬Έμμ΄)**

: λ°μ΄νλ₯Ό μ¬μ©νλ€

```javascript
let myName = "JENNI";
let email = 'dev.jennik@gmail.com';
let hello = `Hello ${myName}!`;
// λ°±ν±: λ°μ΄ν°λ₯Ό λμ΄λ€ μΈ μ μμ(λ³΄κ°λ²)

console.log(myName); // JENNI
console.log(email); // dev.jennik@gmail.com
console.log(hello); // Hello JENNI!
```

2οΈβ£ **NUMBER(μ«μ λ°μ΄ν°)**

: μ μ λ° λΆλ μμμ  μ«μλ₯Ό λνλΈλ€

```javascript
let number = 123;
let opacity = 1.57;

console.log(number); //123
console.log(opacity); //1.57

//λ°μ΄νκ° μμΌλ©΄ 'λ¬Έμμ΄'λ‘ μΈμνλ€
```

3οΈβ£ **Boolean**

: true, false λ κ°μ§ κ°μ κ°λ λΌλ¦¬λ°μ΄ν°

```javascript
let checked  = true;
let isShow = false;

console.log(checked); //true
console.log(isShow); //false
```

4οΈβ£ **Undefined**

: κ°μ΄ ν λΉλμ§ μμ μν

```javascript
let undef;
let obj = { abc: 123 };

console.log(undef); //undefined
console.log(obj.abc); //123
console.log(obj.xyz); // undefined
```

5οΈβ£ **null**

: μ΄λ€ κ°μ΄ μλμ μΌλ‘ λΉμ΄μμμ μλ―Ένλ€

```javascript
let empty = null;

console.log(empty); //null
```

6οΈβ£ **Object(κ°μ²΄ λ°μ΄ν°)**

: μ¬λ¬ λ°μ΄ν°λ₯Ό Key:Value ννλ‘ μ μ₯νλ€ {}

```javascript
let user = {
	// Key:Value,
	name: 'JENNI',
	age: 85 ,
	isValid: true,
};

// μ¬μ©λ²
console.log(user.name); //JENNI
console.log(user.age); //85
console.log(user.isValid); //true
```

7οΈβ£ **Array(λ°°μ΄ λ°μ΄ν°)**

: μ¬λ¬ λ°μ΄ν°λ₯Ό μμ°¨μ μΌλ‘ μ μ₯νλ€ []

```javascript
let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
```



#### π λ³μ(Variables)

π λ°μ΄ν°λ₯Ό μ μ₯νκ³  μ°Έμ‘°(μ¬μ©)νλ λ©λͺ¨λ¦¬ κ³΅κ°

β	`let` `const` `var`

π **λ³μ**

```javascript
//λ³μ μ μΈ
let a = 2;
let b = 5;

// κ°μ μ¬ν λΉ (let)
let a = 12;
console.log(a); //12

a = 999;
console.log(a); //999

//const -> μ¬ν λΉ λΆκ°
const b = 12;
console.log(b); //12

b = 999;
console.log(b); // TypeError: Assignment to constant variable.
```

β οΈ **μμ½μ΄**

: νΉλ³ν μλ―Έλ₯Ό κ°μ§κ³  μμ΄, λ³μλ ν¨μ μ΄λ¦ λ±μΌλ‘ μ¬μ©ν  μ μλ λ¨μ΄

```javascript
let this = 'Hello'; //SyntaxError
let if = 123; //SyntaxError
let break = true; //SyntaxError
```



#### π ν¨μ(Function)

π νΉμ  λμ(κΈ°λ₯)μ μννλ μΌλΆ μ½λμ **μ§ν©(λΆλΆ)**

```javascript
//ν¨μ μ μΈ
function helloFunc() {
	//μ€ν μ½λ
	console.log(1234);
};

//ν¨μ νΈμΆ
helloFunc(); //1234

//ν¨μ κ° λ°ν
function returnFunc() {
	return 123;
};

//λ³μμ ν λΉνμ¬ λ°νλ λ°μ΄ν° μ μ₯
let a = returnFunc();

console.log(a); //123
```

π **λ§€κ°λ³μμ μΈμ**

```javascript
//ν¨μ μ μΈ!
function sum(a, b) { //aμ bλ λ§€κ°λ³μ(Parameters)
	//λ§€κ°λ³μ : λ°μ΄ν°λ₯Ό λ°μμ£Όλ λ§€κ°μ²΄
	return a + b;
};

//μ¬μ¬μ©
let a = sum(1, 2); //1κ³Ό 2λ μΈμλΌκ³  ν¨(Arguments)
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a,b,c); // 3, 19, 6
```

π **ν¨μ μ μΈ vs νν**

```javascript
// κΈ°λͺ(μ΄λ¦μ΄ μλ) ν¨μ -> μ μΈ
function hello() {
	console.log('Hello~');
};

// μ΅λͺ(μ΄λ¦μ΄ μλ) ν¨μ -> νν
let world = function () {
	console.log('World~');
};

//ν¨μ νΈμΆ
hello();
world();
```

π **κ°μ²΄ λ°μ΄ν° λ΄μμμ ν¨μ**

```javascript
//κ°μ²΄ λ°μ΄ν°

const user = {
	name: 'JENNI',
	age: 28,
	// λ©μλ(method) : κ°μ²΄λ°μ΄ν° λ΄λΆμ ν¨μλ₯Ό μλ―Έ
	getName: function() {
		return this.name;
	}
};

const userName = user.getName();
console.log(userName); //JENNI
//or λ°λ‘μ€ν
console.log(user.getName()); //JENNI
```