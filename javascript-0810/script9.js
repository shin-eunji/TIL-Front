// let, const
if (true) {
  var functionScopeValue = "global";
  let blockScopeValue = "local";

  console.log(blockScopeValue);
}

console.log(functionScopeValue); // global
// console.log(blockScopeValue); // ReferenceError

// const URL = "http://js.com";
// URL = "http://js.com";

// if (true) {
//   const URL2 = "http://js.com";
// }

// console.log(URL2);

const CONST_USER = { name: "jay", age: 30 };
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER.name = "jay2";
CONST_USER.age = 28;

console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = { name: "bbo" };
