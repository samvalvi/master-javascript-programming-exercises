const areBothOdd = (number1, number2) => {
    if(number1 % 2 !== 0 && number2 % 2 !== 0) {
        return true;
    }else {
        return false;
    }
}

console.log(areBothOdd(3,5));
