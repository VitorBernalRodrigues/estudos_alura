const fs = require("fs")
const { getTodosLivros, getLivroPorId } = require("../servicos/livro.js")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.mensage)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivrosPorId(id)
        res.send(livro)
    } catch (error) {
        res.status(500)
        res.send(error.mensage)
    }
}

module.exports = {
    getLivros
}