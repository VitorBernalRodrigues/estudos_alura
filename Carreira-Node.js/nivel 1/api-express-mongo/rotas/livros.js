const { Router } = require("express")
const { getLivros } = require("../controladores/livros.js")

const router = Router()

router.get("/", getLivros)

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