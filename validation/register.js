const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {}

//Convert empty fields to an empty string so we can use validator functions
data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
data.username = !isEmpty(data.username) ? data.username : "";
data.password = !isEmpty(data.password) ? data.password : "";

//firstname checks
if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Firstname field is required";
}

//lastname checks
if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Firstname field is required";
}

//username checks
if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
}

//Password checks
if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
}

if (Validator.isLength(data.password, { min: 6, max: 30})) {
    errors.password = "Password must be at least 6 characters"
}

return {
    errors,
    isValid: isEmpty(errors)
};
};