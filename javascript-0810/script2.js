let address = "Seoul";
let members = {};
let addFamily = function (age, name, role) {
  this.members[role] = { age, name };
};

let getHeadcount = function () {
  return Object.keys(this.members).length;
};

let family = { address, members, addFamily, getHeadcount };

family.addFamily(30, "chloe", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "dangdangi", "dog");
console.log(family.getHeadcount()); // 3

// 1. 변수 address, members, addFamily에 속성값을 할당합니다.
// 2. family 객체 리터럴을 선언합니다. { 변수명: 변수값 }으로 정의된 것과 동일하여 단축 속성명은 문자열, 객체, 함수 등 자료형에 상관없이 적용 가능합니다.
// 3. family 객체의 속성 addFamily함수를 호출하여 members를 추가합니다.
// 4. family 객체의 속성 getHeadcount 함수를 호출하여 members에 추가된 개수를 출력합니다.
