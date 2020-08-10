let obj = {};
for (let i = 0; i < 4; i++) {
  obj["key" + i] = i;
}

console.log(obj);

let profile = "chioe: 30";
let person = {
  [profile]: true,
  [profile.split(`:`)[0]]: profile.split(":")[1],
};
console.log(person);

// 1. 객체를 변수 obj에 대입
// 2. 변수 i가 0부터 3까지 반복하는 for반복문을 작서왖이가.
// 3.
