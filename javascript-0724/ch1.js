const { ETIME } = require("constants");

if (true) {
  let a = 10;
  if (true) {
    console.log(a); //
    const a = 20;
  }
  console.log(a); // 10
}
console.log(a); // undefined

// 1. 호이스팅
// let, const
// 변수명만 위로 끌어올리고 끝.
