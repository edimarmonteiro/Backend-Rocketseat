const { response } = require('express');
const express = require('express');

//Subindo o express

const app = express();
app.use(express.json());

app.get("/mensage/:id/:user", (request, response ) => {
    //Destuturando o codigo
    const {id, user} = request.params
    response.send(`
    Mensagem parao ID:${id}.  
    Do usuário ${user}
    `);
} );

app.get("/userss", (request, response) => {
    const {page, limit} = request.query 

    response.send(`Páginas ${page}. Mostra:${limit}`);
});
//Estudando POST
app.post("/user", (request, response) => {
    const {nome, email, password} = request.body

    response.send(`Nome:${nome} - E-mail:${email} - Password:${password}`);
})

//Escolhendo a porta do servidor
const Port = 2023;
app.listen(Port, () => {
    console.log(`Servidor está on papai, na porta ${Port}`);
})