//const { response } = require('express');
const express = require('express');

const routes = require('./routes');
//Subindo o express
const app = express();
app.use(express.json());

//Pegando as rotas 
app.use(routes);

//Escolhendo a porta do servidor
const Port = 2023;
app.listen(Port, () => console.log(`Servidor está on papai, na porta ${Port}`));