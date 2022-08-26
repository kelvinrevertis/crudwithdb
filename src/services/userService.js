const db = require('../db');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {

            db.query('SELECT * FROM usuario', (error, results) => {
                if (error) {
                    reject(error)
                    return
                }
                resolve(results);
            });
        });
    },
    getOne: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM usuario WHERE id = ?', [id], (error, results) => {
                if (error) {
                    reject(error)
                    return
                }
                if (results.length > 0) {
                    resolve(results[0])
                } else {
                    resolve(false)
                }
            })
        })
    },
    addUser: (nome, cpf, email, telefone, sexo, datanascimento) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO usuario (nome,cpf,email,telefone,sexo,datanascimento) VALUES(?,?,?,?,?,?)',
                [nome, cpf, email, telefone, sexo, datanascimento],
                (error, results) => {
                    if (error) {
                        reject(error)
                        return
                    }
                    resolve(results.addId)
                }
            )
        })
    },
    editUser: (id, nome, cpf, email, telefone, sexo, datanascimento) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE usuario SET nome=?,cpf=?,email=?,telefone=?,sexo=?,datanascimento=? WHERE id =?',
                [nome, cpf, email, telefone, sexo, datanascimento, id],
                (error, results) => {
                    if (error) {
                        reject(error)
                        return
                    }
                    resolve(results)
                }
            )
        })
    }, deleteUser: (id) => {
        return new Promise((resolve, reject) => {

            db.query('DELETE FROM usuario WHERE id = ?', [id],
                (error, results) => {
                    if (error) {
                        reject(error)
                        return
                    }
                    resolve(results);
                });
        });
    }

}