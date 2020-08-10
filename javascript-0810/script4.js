// 객체 비구조화 할당
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// let { a, c } = obj;
// console.log(`a >>> ${a}`);
// console.log(`a >>> ${c}`);

// let { a: newA = 10, f: newF = 5 } = obj;
// console.log(`newA >>> ${newA}`);
// console.log(`newF >>> ${newF}`);

// 배열 비구조화 할당
let arr = [1, 2, "shin", true, 30];

let [b, c, ...rest] = arr;
console.log(`0) b >>> ${b}`); // 1
console.log(`0) c >>> ${c}`); // 2
console.log(`0) rest >>> ${rest}`); // shin, true, 30

let [a = 10, f = 9] = [1];
console.log(`1) a >>> ${a}`); // 1
console.log(`1) f >>> ${f}`); // 9

[a, f] = [f, a];
console.log(`2) a >>> ${a}`); // 9
console.log(`2) f >>> ${f}`); // 1

function getArr() {
  return [1, 2, 3, 4, 5, 6];
}

[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`); // 1
console.log(`3) f >>> ${f}`); // 6
