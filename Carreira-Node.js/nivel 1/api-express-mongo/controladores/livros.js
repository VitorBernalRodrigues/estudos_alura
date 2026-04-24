function getLivros(req, res) {
    try {
        // throw new Error("teste")
        res.send("Olá Mundo")
    } catch (error) {
        res.status(500)
        res.send(error.mensage)
    }
}

module.exports = {
    getLivros
}