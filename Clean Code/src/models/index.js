const fs = require('fs'); //File System
const path = require('path') //Caminho
const sequelize = require('../config/database');

const db = [];

//dir -> Listar os arquivos do diretório
fs.readdirSync(__dirname)
.filter(file => file !== 'index.js')
.forEach(file => {
    //capturando cada arquivo individualmente
    const model = require(path.join(__dirname, file));
    //db [user] = Modelo user
    db[model.name] = model;
});

sequelize.sync();

module.exports = { sequelize, ...db};