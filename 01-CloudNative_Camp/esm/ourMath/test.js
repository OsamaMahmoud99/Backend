//const ourMath = require('../ourMath');
import * as ourMath from '../ourMath/index.js';



let average = ourMath.avg(2, 4, 6, 8);

console.log(average);

if (average === 5) {
    console.log('avg function works');
}
else {
    console.log('avg function does not work');
}

let new_set = ourMath.union([1, 2, 3], [3, 4, 5]);
console.log(new_set);
if(new_set.length === 5 && new_set.includes(1) && new_set.includes(2) && new_set.includes(3) && new_set.includes(4) && new_set.includes(5)) {
    console.log('union function works');
}
else {
    console.log('union function does not work');
}

let intersected_set = ourMath.intersection([1, 2, 3], [3, 4, 5]);
console.log(intersected_set);
if(intersected_set.length === 1 && intersected_set.includes(3)) {
    console.log('intersection function works');
}
else {
    console.log('intersection function does not work');
}