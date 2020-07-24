// var sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
//   console.log(i); // 1, 2, 3, 4, 5 ... 10
// }

// console.log(sum); // 55
// console.log(i); // ubdefined

{
  let a = 2;
  if (a < 1) {
    let b = a * 3;
    console.log(b); // false임
  } else {
    let b = a / 4;
    console.log(b); // .5 true
  }
  console.log(b);
}
console.log(a); // undefined
