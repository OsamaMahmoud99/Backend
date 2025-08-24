// Todo: Your solution code goes here

function double(value) {
    
    return value * 2;
}

function transform(num, func) {
    
    return func(num);
}

let out = transform(10, double);

console.log(out);
