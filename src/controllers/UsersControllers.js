const AppError = require("../util/AppError")

class UsersControllers {
/*
*index = GET para listar varios registros
*show = GET para listar um gegistro especifico
*create = POST para criar um registro
*update = PUT para atualizar um registro
*delete = DELETE para deletar um registro
*/
create(request, response) {
    const {nome, email, password} = request.body;
    
    //Erro do lado do cliente
    if(!nome){
        throw new AppError("Nome é obrigatorio!");
    }
    response.json({nome, email, password});
}
}

module.exports = UsersControllers