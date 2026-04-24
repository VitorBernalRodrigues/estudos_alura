const fs = require("fs")
const { getTodosLivros } = require("../servicos/livro.js")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.mensage)
    }
}

module.exports = {
    getLivros
}