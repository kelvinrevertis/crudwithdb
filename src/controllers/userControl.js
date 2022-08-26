const { param } = require('../routes.js')
const userService = require('../services/userService.js')

module.exports = {

    getAll: async (req, res) => {
        let json = { error: '', result: [] }

        let users = await userService.getAll()

        for (let i in users) {
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
    },

    getOne: async (req, res) => {
        let json = { error: '', result: {} }

        let id = req.params.id;
        let user = await userService.getOne(id)

        if (user) {
            json.result = user
        }

        res.json(json)
    },

    addUser: async (req, res) => {
        let json = { error: '', result: {} }

        let nome = req.body.nome;
        let cpf = req.body.cpf;
        let email = req.body.email;
        let telefone = req.body.telefone;
        let sexo = req.body.sexo;
        let datanascimento = req.body.datanascimento;

        if (nome && cpf && email && telefone && sexo && datanascimento) {
            let userId = await userService.addUser(nome, cpf, email, telefone, sexo, datanascimento)
            json.result = {
                id: userId,
                nome,
                cpf,
                email,
                telefone,
                sexo,
                datanascimento
            }
        } else {
            json.error = "Valores não enviados"
        }

        res.json(json)
    },

    editUser: async (req, res) => {
        let json = { error: '', result: {} }
        let id = req.params.id
        let nome = req.body.nome
        let cpf = req.body.cpf
        let email = req.body.email
        let telefone = req.body.telefone
        let sexo = req.body.sexo
        let datanascimento = req.body.datanascimento

        if (id && nome && cpf && email && telefone && sexo && datanascimento) {
            await userService.editUser(id, nome, cpf, email, telefone, sexo, datanascimento)
            json.result = {
                id,
                nome,
                cpf,
                email,
                telefone,
                sexo,
                datanascimento
            }
        } else {
            json.error = "Valores não enviados"
        }

        res.json(json)
    },
    deleteUser: async (req, res) => {
        let json = { error: '', result: {} }
        await userService.deleteUser(req.params.id)

        res.json(json)
    }
}