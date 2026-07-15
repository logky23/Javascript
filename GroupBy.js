const arr = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 30 },
    { name: "Eve", age: 28 }
];

const peopleByAge = Object.groupBy(arr, (person) => {
    console.log(person);
    
    return person.age;
});

