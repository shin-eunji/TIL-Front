let family = {
  // 변수 family 객체값을 할당함 address, members, addFamily, getHeadcount
  address: "seoul", // 문자열 속성 값을 객체 값에 추가.
  members: {}, // members에 새로운 객체 리터럴을 대입하지만 추가된 members의 객체는 빈 값임.
  addFamily: function (age, name, role) {
    // addFamily 함수 리터럴을 대입하여 함수 표현식으로 변수에 대입했던 것처럼 키 값으로 함수를 할당합니다.
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
console.log(family.getHeadcount());
