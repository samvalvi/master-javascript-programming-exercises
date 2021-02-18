const getIndexOf = (character, string) => {
    let counter = 0;
    let index = -1;
    let charArray = string.split('');

    for(var i = 0; i < charArray.length; i++) {
        if(character === charArray[i]){
            ++counter;
            index = i
            return i;
        }
        if(counter > 1){
            return index;
        }
    }
    
    return index;
}

let result = getIndexOf('h', 'Johnh');
console.log(result);