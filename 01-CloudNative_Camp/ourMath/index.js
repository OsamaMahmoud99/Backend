/*
avg function
inputs: nums[] ...nums
- sum all nums
- divide by nums.length
- return result
*/

exports.avg = function avg(...nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    result = result / nums.length;
    return result;
}

/*
sets union function
inputs: 2 arrays .. first_array .. second_array
steps:
- copy first_array to result
- copy from second_array to result only if not already in result
- return result
*/

exports.union = function union(first_array, second_array) {
    let result = [];

    for (let i = 0; i < first_array.length; i++) {
        result.push(first_array[i]);
    }

    for (let i = 0; i < second_array.length; i++) {
        if (!result.includes(second_array[i])) {
            result.push(second_array[i]);
        }
    }

    return result;

}

/*
sets intersection function
inputs: 2 arrays .. first_array .. second_array
steps:
- fro each element in first_array
  - if element is in second_array
    - add to result
- return result
*/
exports.intersection = function intersection(first_array, second_array) {
    let result = [];
    for (let i = 0; i < first_array.length; i++) {
        if (second_array.includes(first_array[i])) {
            result.push(first_array[i]);
        }       
    }
    return result;
}