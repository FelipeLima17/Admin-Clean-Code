require('dotenv').config(); //Arquivo => .env
const express = require('express');
const { sequelize } = require('./models');
const routes = require("./routers/router");

const app = express(); //Resposta do JSON

app.use(express.json());
//process.env ? PORT 3000

app.use('/api', routes);

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados deu certo");
})
.catch(err => {
    console.log("Erro ao se conectar no banco:", err);
});

const PORT = process.env.PORT || 3000;
//Listen -> Ouvir
// Ouvindo na possível porta 3000
app.listen(PORT, () => {
    console.log('-------------------------');
    console.log(`Running on http://${PORT}`);
    console.log('-------------------------');
});