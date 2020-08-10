var a = 10;
console.log(a); // 10

function print() {
  var b = 10;
  if (true) {
    var c = 20;
  }
  console.log(c); // 20
  console.log(b); // 10
}

print();
console.log(b); // ReferenceError
