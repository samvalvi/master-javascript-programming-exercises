const findMinLengthOfThreeWords = (word1, word2, word3) => {
    if(word1.length > word2.length > word3.length){
        return word3.length;
    }else if(word1.length > word2.length < word3.length ) {
        return word2.length
    }else {
        return word1.length
    }
}

let result = findMinLengthOfThreeWords('Samuel', 'John', 'Johnnie');
console.log(result);