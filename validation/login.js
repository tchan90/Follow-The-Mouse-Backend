const validator = require("validator");
const isEmpty = require("./isEmpty")

module.exports = function validateLoginInput(data){
    let errors = {};

    //if isEmpty is false, return empty string. Below is an if/else function
    data.email = !isEmpty(data.email)?data.email:'';
    data.password = !isEmpty(data.password)?data.password:'';

    //check if its a valid email
    if(!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }

    if(validator.isEmpty(data.email)){
        errors.email='Email field is required';
    }

    //check for valid password
    if(!validator.isLength(data.password, {min:6, max:30})){
        errors.password = 'Password must be at least 6 characters';
    }

    if(validator.isEmpty(data.password)){
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors) //global function isEmpty created
    }
}