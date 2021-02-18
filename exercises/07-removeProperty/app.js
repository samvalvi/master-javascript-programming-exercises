function removeProperty(obj, key) {
    delete obj[key]
}

let person = {
  name: 'John',
  lastname: 'Doe',
  age: 54,
  height: 1.90,
};

removeProperty(person, 'height');
console.log(Object.entries(person));