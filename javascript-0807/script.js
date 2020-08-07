// let i = 0;

// while (i < 10) {
//   document.write("Coding everybody ");
//   i++;
// }

// function num() {
//   i = 0;
//   while (i < 10) {
//     document.write(i);
//     i += 1;
//   }
// }

// num();
// num();
// num();
// num();
// num();
// num();

// let grades = {
//   kim: 1,
//   lee: 2,
//   shin: 3,
// };

// console.log(grades.kim);

// let arr = ["a", "b", "c"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let grades = {
//   kim: 1,
//   lee: 2,
//   shin: 3,
// };

// for (key in grades) {
//   console.log(`key: ${key}, value: ${grades[key]}`);
//   console.log(key);
// }

let grades = {
  list: {
    kim: 1,
    lee: 2,
    shin: 3,
  },
  show: function () {
    alert(this);
  },
};
grades["show"]();
