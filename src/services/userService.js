const db = require('../db')

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM usuario', (error, results) => {
                if (error) {
                    reject(error)
                    return
                } resolve(results)
            })
        })
    }

}