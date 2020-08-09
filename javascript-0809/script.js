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
