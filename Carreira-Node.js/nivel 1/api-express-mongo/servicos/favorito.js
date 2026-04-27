const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deleteFavorito(id) {
    const favoritosAtuais = JSON.parse(fs.readFileSync("favoritos.json"))
    const favoritosFiltrados = favoritosAtuais.filter( favorito => favorito.id !== id) 
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritosFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const favoritoNovo = livros.find(livro => livro.id === id)
    const novaListaDeFavoritos = [...favoritos, favoritoNovo]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos)) 
}

module.exports = {
    getTodosFavoritos,
    deleteFavorito,
    insereFavorito
}
 

