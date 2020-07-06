// function foo() {
//   x = 10;
// }

// foo();

// console.log(x); // 10

console.log(this); // window

function square(number) {
  console.log(this);
  return number * number; // 4
}

square(2);

const person = {
  name: "shin",
  getName() {
    console.log(this);
    return this.name;
  },
};

console.log(person.getName()); // 'shin'

function Person(name) {
  this.name = name;
  console.log(this); //Person {name: 'kim'}
}

const me = new Person("kim");
