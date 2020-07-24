// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return 100;
// }
// let iter = gen();
// console.log(iter[Symbol.iterator]() == iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (const a of gen()) console.log(a);

// function* odds(l) {
//   for (let i = 0; i < l; i++) {
//     if (i % 2) yield i;
//   }
// }
// let iter2 = odds(10);
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());

function* infinity(i = 0) {
  while (ture) yield i++;
}
function* odds(l) {
  for (let i = 0; i < l; i++) {
    if (i % 2) yield i;
  }
}

let iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
