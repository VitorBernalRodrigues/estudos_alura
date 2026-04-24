const { Router } = require("express")
const { getLivros, getLivro } = require("../controladores/livros.js")

const router = Router()

router.get("/", getLivros)

router.get("/:id", getLivro)

router.post("/", (req, res) => {
    res.send("Requisição do tipo POST")
})

router.patch("/", (req, res) => {
    res.send("Requisição do tipo PATCH")
})

router.delete("/", (req, res) => {
    res.send("Requisição do tipo delete")
})

module.exports = router