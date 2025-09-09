
// function declaration hoisted
function add_numbers(a, b) {
    let result = a + b;
    return result;
}

let result = add_numbers(5, 10);
console.log("The result is: " + result);

// function expression not hoisted
let multiply_numbers = function(a, b) {
    return a * b;
};

let product = multiply_numbers(5, 10);
console.log("The product is: " + product);

// arrow function not hoisted
let divide_numbers = (a, b) => a / b;   
let quotient = divide_numbers(10, 2);
console.log("The quotient is: " + quotient);

function outer_function(num1 , num2){
    for(let i=0; i<arguments.length; i++) {
        console.log("Argument " + i + ": " + arguments[i]);
    }

}
outer_function(5, 10);


function add_numbers(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    console.log("The sum is: " + result);
}

add_numbers(5, 10, 15, 20);