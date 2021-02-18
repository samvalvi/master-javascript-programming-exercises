function getLengthOfTwoWords(word1, word2) {
  let sum = 0;

  sum = word1.length + word2.length;

  return `The sum of their lengths is: ${sum} characters.`
}

console.log(getLengthOfTwoWords('John', 'Johnnie'));