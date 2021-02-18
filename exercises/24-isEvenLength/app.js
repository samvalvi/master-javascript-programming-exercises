const isEvenLength = word => {
    if(word.length % 2 === 0) {
        return true
    }else {
        return false
    }
}

let result = isEvenLength('John') 
console.log(result);