// const x = 1;
// function outerFunc() {
//   const x = 10;
//   function innerFunc() {
//     console.log(x); // 10
//   }
//   innerFunc();
// }
// outerFunc();

// const x = 1;

// function outerFunc() {
//   const x = 10;
//   innerFunc();
// }

// function innerFunc() {
//   console.log(x); // 1
// }

// outerFunc();

// const x = 1;

// function foo() {
//   const x = 10;

//   bar();
// }

// function bar() {
//   console.log(x);
// }

// foo();
// bar();

function foo() {
  const x = 1;
  const y = 2;

  function bar() {
    const z = 3;
    console.log(z); // 3
  }
  return bar;
}
const bar = foo();
bar();
