const areValidCredentials = (name, password) => {
    if(name.length > 3 && password.length > 8) {
        return true;
    }else{
        return false;
    }
}

let result = areValidCredentials('John@email.com', '123456789');
console.log(result);