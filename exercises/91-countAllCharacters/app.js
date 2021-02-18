let word = 'Johnnie';

const countAllCharacters = string => {
    let object = {};
    let arrayWord = Array.from(string);

    for(let i = 0; i < arrayWord.length; i++){
        let element = arrayWord.filter(ele => ele === arrayWord[i]).length;
        object[arrayWord[i]] = element;
    }

    return object;
}

let result = countAllCharacters('Melissa');
console.log(result);