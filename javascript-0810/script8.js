var a = 10;
console.log(a); // 10

function print() {
  var b = 10;
  if (true) {
    var c = 20;
  }
  console.log(c); // 20
  console.log(b); // 10
}

print();
// console.log(b); // ReferenceError

// 호이스팅
hello();
function hello() {
  console.log("안녕하세요.");
}

// 함수 표현식을 통해 변수에 할당하여 호출
hello2();
let hello2 = function () {
  console.log("안녕하세요.");
};
