
   



// 1. Function to sort an array
function sortArray(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

// 2. Function to find numbers divisible by 5
function divisibles(array) {
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}

// 3. Function to print array elements
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// Example usage:
var array = [55, 32, 85, 12, 24, 9, 4, 71, 60];
var x = sortArray(array);
console.log("The sum is: "+divisibles(x));
printArray(x);