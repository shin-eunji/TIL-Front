let address = "seoul";
let members = {};
let addFamaily = function (age, name, role) {
  this.members[role] = { age, name };
};

let getHeadcount = function () {
  return Object.keys(this.members).length;
};
