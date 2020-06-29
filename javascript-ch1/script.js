// 기본형 데이터
var a; // 변수 선언

a = 10; // 할당

var b = "abc";
b = false;

var c = b;

// b === c

c = 20;

// b =/= c

console.log(a); // 10
console.log(b); // false
console.log(c); // 20

// 참조형 데이터
// 객체
var obj = {
  a: 10,
  b: "abc",
};

var obj2 = obj; // 값을 복사한다.
obj2.a = 10;

// 바라보던 객체를 함께 바라보기 때문에 동일한 객체를 참조한다.
obj === obj2;

console.log(obj); // { a: 10, b: 'abc' }
console.log(obj2); // { a: 10, b: 'abc' }

var obj3 = {
  a: [4, 5, 6],
};

obj3.a = "new";
// 가비지컬렉터에 의해 4,5,6 는 사라집니다.
console.log(obj3); // { a: 'new' }

// 결론
// 기본형 데이터: 값을 그대로 할당합니다.
// 참조형 데이터: 값이 저장된 주소값을 할당(참조)합니다.
