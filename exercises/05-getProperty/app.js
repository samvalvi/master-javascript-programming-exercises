function getProperty(obj, key) {
    return obj[key];
}


let car = {
  model: 'Toyota',
}

let result = getProperty(car,'model');
console.log(result);
