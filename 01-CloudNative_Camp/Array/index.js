
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
console.log(fruits.length);

console.log(fruits.join());
console.log(fruits.join(" * "));

var colors = ["Black", "Red", "Green", "White", "Blue"];
colors[2] = "Yellow";
console.log(colors);
console.log(colors.length);

colors.push("Brown");
console.log(colors);
console.log(colors.length);

colors.unshift("Pink");
console.log(colors);
console.log(colors.length);

colors.shift();
console.log(colors);
console.log(colors.length);

colors.pop();
console.log(colors);
console.log(colors.length);


let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = arr1.concat(arr2);
console.log(arr3);