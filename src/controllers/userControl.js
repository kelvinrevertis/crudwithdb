const userService = require('../services/userService.js')

module.exports = {
    getAll: async (req, res) =>{
        let json = {error: ' ', result:[]}

        let users = await userService.getAll()

        for(let i in users){
            json.result.push({
                id: users[i].id,
                nome: users[i].nome,
                cpf: users[i].cpf,
                email: users[i].email,
                telefone: users[i].telefone,
                sexo: users[i].sexo,
                datanascimento: users[i].datanascimento

            })
        }
        res.json(json)
    }
}