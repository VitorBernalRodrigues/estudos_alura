const fs = require("fs")
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro} = require("../servicos/livro.js")

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosFavoritos()
        res.send(favoritos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.body.id
        insereFavorito(id)
        res.status(201)
        res.send("Favorito adicionado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

function deletaFavorito(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletarFavoritoPorId(id)
            res.send("favorito deletado com sucesso")
        } else {
            res.status(442)
            res.send("Id invalido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}



module.exports = {
    getFavoritos,
    postFavorito,
    deletaFavorito
}