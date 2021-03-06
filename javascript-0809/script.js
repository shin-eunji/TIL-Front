var family = {
  address: "seoul",
  members: {},
  addFamily: function (age, name, role) {
    this.member[role] = {
      age: age,
      name: name,
    };
  },
  getHeadcount: function () {
    return Object.keys(this.members).length;
  },
};
family.addFamily(30, "chioe", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "dangdangi", "fdaf");

var printMembers = function () {
  let members = family.members;
  for (role in members) {
    console.log(
      `role => ${role}, name => ${members[role].name}, age => ${members[role].age}`
    );
  }
};
