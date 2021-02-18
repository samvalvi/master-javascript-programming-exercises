const isEvenAndGreaterThanTen = number => {
    if(number % 2 === 0 && number > 10){
        return true;
    }else {
        return false;
    }
}

let result = isEvenAndGreaterThanTen(12); 
console.log(result);