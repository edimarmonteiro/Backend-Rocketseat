const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

//Colocando o router pra funcionar
const notesRoutes = Router();

//Criando sempre uma nova nota
const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create);

module.exports = notesRoutes;