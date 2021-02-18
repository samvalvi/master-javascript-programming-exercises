var input = [1,2,3,4,5];

const computeAverageOfNumbers = arr => {
    let sum = 0;
    let average = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr.length !== 0){
            sum += arr[i];
        }
        average = sum / arr.length;
    }
    return average;
}

let result = computeAverageOfNumbers(input);
console.log(result);