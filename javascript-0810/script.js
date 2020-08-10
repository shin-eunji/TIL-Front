let family = {
  address: "seoul",
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: name,
    };
  },
  getHeadcount: function () {
    return Object.keys(this.members).length;
  },
};

family.addFamily(30, "chloe", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "dangdangi", "dog");
// console.log(family.getHeadcount()); // 3

// 1. 변수 family 객체값을 할당함 address, members, addFamily, getHeadcount
// 2. 문자열 속성 값을 객체 값에 추가.
// 3. members에 새로운 객체 리터럴을 대입하지만 추가된 members의 객체는 빈 값임.
// 4. addFamily 함수 리터럴을 대입하여 함수 표현식으로 변수에 대입했던 것처럼 키 값으로 함수를 할당합니다.
// 5. this 키워드를 통해 family 객체 내부 속성에 접근할 수 있습니다. this키워드를 통해 family의 member속성으로 접근하고 값을 해당했다는 정도만 알아둡니다. 객체가 선언된 이후에도 속성을 추가적으로 더 넣을 수 있습니다.
// 6. getHeadcount에 함수 리터럴을 할당합니다. 함수는 members의 key들을 모아 배열로 반환하고, 반환된 배열의 길이를 통해 family 객체의 사이즈를 알 수 있습니다.
// 7. family 객체의 속성 addFamily 함수를 호출하여 members를 추가합니다.
// 8. family 객체의 속성 addFamily 함수를 호출하여 members에 추가된 개수를 출력합니다.

let printMembers = function () {
  let members = family.members;
  for (role in members) {
    console.log(
      `role => ${role}, name => ${members[role].name}, age => ${members[role].age}`
    );
  }
  // console.log(members);
};
printMembers();

let members = family.members;
members["nephew"] = {
  age: 3,
  name: "shin",
};
members.niece = {
  age: 5,
  name: "lyn",
};

delete members.aunt;
delete members["dog"];
printMembers();

// 1. 변수 printMembers 함수 표현식을 대입합니다.
// 2. family 변수 객체의 members에 접근(family.members)하여 members 변수에 선언하고 해당 값을 할당합니다.
// 3. for-in으로 members 객체를 순환합니다. members의 속성을 하나씩 접근할 때마다 name과 age속성값을 반환하여 출력합니다.
// 4. printMembers() 함수를 호출하여 실행시킵니다.
// 5. 객체에 새로운 속성을 추가합니다.
// 6. delete 객체의 특성 속성을 삭제하는 방법으로 특정 객체의 속성을 뒤에 작성하면 삭제됩니다.
