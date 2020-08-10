// 함수 표현식
let greetingE = function (name) {
  console.log(name);
};

// 함수 선언문
function greetingD(name) {
  console.log(name);
}

greetingE("Kim");
greetingD("Shin");

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  console.log(arguments instanceof Array); // false
  return total;
}

let sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3); // 6

function testArg() {
  let newArr = Array.prototype.slice.call(arguments);
  console.log(newArr); // [ 'a', 'b' ]
  //   console.log(newArr.indexOf("b"));
  //   console.log(arguments.indexOf("b"));
}

testArg("a", "b");

function drawChart(width = 200, height = 400) {
  console.log(`${width} x ${height} 차트를 그립니다.`);
}
drawChart(100);
drawChart();

function drawChart2(width = 200, height = 400) {
  console.log(`${width} x ${height} 차트를 그립니다.`);
}
drawChart2(300);
drawChart2();
