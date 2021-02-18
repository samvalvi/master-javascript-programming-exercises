function checkAge(name, age) {
    if(age < 21) {
      console.log(`Go home, ${name}!`);
    }else {
      console.log(`Welcome, ${name}!`);
    }
}

checkAge('John', 17);