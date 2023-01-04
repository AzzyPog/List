const Datatype = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
    firstName: {
    type: Datatype.STRING,
    allownull: false,
    },
    lastName: {
        type: Datatype.STRING,
        allowNull: false,
    },
    birthday: {
        type: Datatype.DATEONLY,
        allowNull: false,
    },
    email: {
        type: Datatype.STRING,
        allowNull: false,
    },
    profilePicture: {
        type: Datatype.STRING,
        allowNull: true,
    },
    hash: {
        type: Datatype.STRING,
        allowNull: false,
    },
    salt: {
        type: Datatype.STRING,
        allowNull: false,
    },

}, {timestamps: true});

User.associate = function(models) {
    //placeholder
}


module.exports = User;