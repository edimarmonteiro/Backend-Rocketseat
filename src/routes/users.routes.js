const { Router } = require('express');

const UsersControllers = require('../controllers/UsersControllers');
const userRoutes = Router();

/*
function myMiddleware(request, response, next){
    console.log('Você passou no Middleware');
    console.log(request.body);
    if(!request.body.isAdmin){
    return response.json({message: "Deu merrda"});
}
    
next();
}*/
const usersControllers = new UsersControllers();

//Criando usuario
userRoutes.post("/", usersControllers.create);
//Atualizando usuario
userRoutes.put("/:id", usersControllers.update);

//Esportando para quem quiser usar esse arquivo, poder ussar
module.exports = userRoutes;
