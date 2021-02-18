function addProperty(obj, key) {
  obj[key] = true
  console.log(Object.entries(obj));
}


var car = {
    brand: 'Toyota',
    color: 'Blue',
}

addProperty(car, 'available');
