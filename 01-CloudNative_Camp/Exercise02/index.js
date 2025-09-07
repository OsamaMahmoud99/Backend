//JavaScript program to swap two variables


var a = 7;
var b = 12;

var temp;

temp = a; // Store the value of a in temp
a = b; // Assign the value of b to a
b = temp; // Assign the value of temp (original a) to b 

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);
// Output: a = 12, b = 7

// program to convert temperature from Fahrenheit to Celsius
var fahrenheit = 100;
var celsius = (fahrenheit - 32) * 5 / 9;
console.log("Temperature in Celsius:", celsius);