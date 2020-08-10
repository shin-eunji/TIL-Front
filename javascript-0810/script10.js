var person = "Shin";

function print() {
  var person2 = "Kim";

  function innerPrint() {
    console.log(person);
    console.log(person2);
  }

  innerPrint();
  console.log("print finished");
}

print();
console.log("finished");

// Shin
// Kim
// print finished
// finished
