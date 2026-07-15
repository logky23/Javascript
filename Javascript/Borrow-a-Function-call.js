const person1 = {
  name: "Alice",
  greet: function(age) {
    return `Hi, I'm ${this.name} and I'm ${age} years old.`;
  }
};

const person2 = {
  name: "Bob"
};

function myFunc() {
  return this.name;
}

console.log(myFunc.call(person2));
console.log(person1.greet.call(person2, 25));
console.log(person1.greet(25));



