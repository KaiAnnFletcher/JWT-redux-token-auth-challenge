//Define the user model
'use strict';

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }); 
    return User;
};