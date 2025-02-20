const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database");
//Definindo o modelo
const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true //Email é único
    }
}, {
    timestamps: true //Timestamps, para armazenar a hora que foi criado
});

module.exports = User;