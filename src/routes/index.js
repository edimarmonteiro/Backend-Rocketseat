const { Router } = require('express');

//Requisisão. Acessando o user.routes
const userRoutes = require('./users.routes');
const notesRoutes = require('./notes.routes');

const routes = Router();
/*Sempre que o usuario acessar o /users
sera direcionado para o userRouter */
routes.use("/users", userRoutes);
//"/notes" == nome da tabela
routes.use("/notes", notesRoutes);

module.exports = routes;