// let add1 = (function () {
//   let a = 10;
//   return function (x, y) {
//     return x + y + a;
//   };
// })();

// console.log(add1(1, 2));

// let add2 = (function () {
//   let a = 10;
//   return new Function("x", "y", "return x + y + a");
// })();

// console.log(add2(1, 2));

let a = 1;

if (true) {
  let b = 2;
  if (true) {
    let c = 3;
  }
}

function foo() {
  let d = 4;

  function bar() {
    let e = 5;
  }

  bar();
}
foo();

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
