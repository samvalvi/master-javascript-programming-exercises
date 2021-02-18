const computeAverageLengthOfWords = (word1, word2) => {
    let sum = 0;
    sum = (word1.length + word2.length) /2;
    return sum;
};

let result = computeAverageLengthOfWords('John', 'Jenny'); 
console.log(result);