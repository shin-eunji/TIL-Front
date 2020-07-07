// ES5 생성자 함수
var person = (function () {
  var _name = "";

  function Person(name) {
    _name: name;
  }

  Person.prototype.sayHi = function () {
    console.log("Hi~ My name is " + _name);
  };

  return Person;
})();

var me = new Person("Lee");

me._name = "Kim";
me.sayHi();
