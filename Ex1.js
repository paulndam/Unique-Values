// function that adds two m=numbers in an array, if the sum of those numbers added is zero , then it return the array with those numbers

function sumZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }

    // if(array[left] + array[right] === 0){
    //     return [array[left], array[right]]
    // }else if(array[left] + array[right] > 0){
    //     array[right]--
    // }else{
    //     array[left] ++
    // }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 7])); // out put is -3,3
console.log(sumZero([-4, -3, -2, -1, 0, 5, 8, 7])); // out put is undefined

// function that accepts a sorted array and counts the unique values in the array, negative numbers can be included in the array.

function countUniqueValues(array) {
  
    if(array.length === 0){
        return `There's no number in the array`
    }

  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      array[j]++;
    } else if (array[i] !== array[j]) {
      array[i]++;
      array[i] = array[j];
    }

    //console.log(i, j);
  }

  return array[i];
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // out put is 2 unique numbers
console.log(countUniqueValues([1, 2, 3, 4, 4, 5, 5, 6])); // out put is 6 unique numbers
console.log(countUniqueValues([])); // out put is undefined
console.log(countUniqueValues([-3, -2, -1, -1, 2, 2])); // out put is 2 unique numbers
console.log(countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7])); // out put is 7 unique numbers
