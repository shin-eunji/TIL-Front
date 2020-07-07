let foo = function () {
  return 1;
};

foo();

new foo(); // foo {}

var obj = { a: foo }; // 1
obj.a();
