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

//Estudando POST
userRoutes.post("/", usersControllers.create);

//Esportando para quem quiser usar esse arquivo, poder ussar
module.exports = userRoutes;