function isOldEnoughToDrinkAndDrive(age) {
    if(age > 21 && age > 16){
      return true
    }else {
      return false
    }
}

console.log(isOldEnoughToDrinkAndDrive(22));