// var x = 1;
// if (true) {
//   var x = 10;
// }

// console.log(x);

// var i = 10;

// for (var i = 0; i < 5; i++) {
//   console.log(i); // 1 2 3 4
// }
// console.log(i); // 5

// 3. var 변수 호이스팅
// var foo; (선언 단계)
console.log(foo); // undefined
// 변수 호이스팅으로 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작하며, 변수 선언문 이전에 참조할 수 있다.
// 그러므로 var foo; 선언문으로 undefined로 초기화 된다. (초기화 단계)

foo = 123;
// 값을 할당했다. (할당 단계)

console.log(foo); // 123

var foo; // 변수 호이스팅으로 선언문은 스코프의 선두로 올라가게된다.

// 4. let 변수 호이스팅
console.log(foo); // ReferenceError

let foo; // 선언 단계

console.log(foo); // undefined

foo = 1; // 할당 단계

console.log(foo); // 1
