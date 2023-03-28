const { Router } = require('express');

const userRoutes = Router();
/*
userRouter.get("/mensage/:id/:user", (request, response ) => {
    //Destuturando o codigo
    const {id, user} = request.params
    response.send(`
    Mensagem parao ID:${id}.  
    Do usuário ${user}
    `);
} );

userRouter.get("/userss", (request, response) => {
    const {page, limit} = request.query 

    response.send(`Páginas ${page}. Mostra:${limit}`);
});
*/

//Estudando POST
userRoutes.post("/", (request, response) => {
    const {nome, email, password} = request.body

    response.send(`Nome:${nome} - E-mail:${email} - Password:${password}`);
})

//Esportando para quem quiser usar esse arquivo, poder ussar
module.exports = userRoutes;