// Curring is a pre-configured function that can be reused it with different paramaters

// simple currying

function add(num) {
    return function(params) {
        return num + params;
    }
};

const addToFive = add(5);

const result = addToFive(3);
console.log(result);


// infinite currying
function sum(a) {
    return function(b) {
        if (!b) return a;
        return sum(a + b);
     }
};

console.log(sum(3)(4)());