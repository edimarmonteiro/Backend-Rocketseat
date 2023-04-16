const knex = require("../database/knex");

class NotesController {
    async create(request, response) {
        /*Destruturando os dados adicionado
    no meu bd para o usuario adicionar os dados*/
        const { title, description, tags, links } = request.body;
        //Ultilizando o id como indentificação
        const { user_id } = request.params;

        /*Relacionando a nota com o usuario
        CADASTRANDO A NOTA AO USUARIO*/
        const note_id = await knex("notes").insert({
            title,
            description,
            user_id
        }); 

        /*.map == Ira pecorr cada item que eu tenho (link)
        e ira retorna as informaç~oes pedidas*/
        const linksInsert = links.map(link => {
            return {
                //inserindo o codigo da nota no link
                note_id,
                //criando o novo obijeto(mudando de link para url)
                url: link
            }
        });

        //inserindo as informações
        await knex("links").insert(linksInsert);

        const tagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                user_id
            }
        });

        await knex("tags").insert(tagsInsert);

        //resposta a retorna ao usuari
        response.json();
    }
}

module.exports = NotesController;