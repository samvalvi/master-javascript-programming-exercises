function getLengthOfWord(word) {
  let counter = 0;

  for(var i = 0; i < word.length; i++){
    if(word.charAt(i) === ' '){
      word.replace(' ', '');
    }else{
      counter++;
    }
  }

  console.log(`The text '${word}' has: ${counter} characters.`)
}

getLengthOfWord('Samuel');