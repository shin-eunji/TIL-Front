// let foo = function () {
//   return 1;
// };

// foo();

// new foo(); // foo {}

// var obj = { a: foo }; // 1
// obj.a();

// 콜백함수를 사용하는 고차함수 map
// 콜백함수도 프로토타입을 생성한다.
[1, 2, 3].map(function (item) {
  return item * 2;
}); // [2, 4, 6]
