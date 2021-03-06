//Define the user model
'use strict';

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstname: {type:DataTypes.STRING},
        lastname: {type:DataTypes.STRING},
        email: {type:DataTypes.STRING},
        password: {type:DataTypes.STRING}
    }); 
    return User;
};