const { Router } = require("express")
const { getLivros, getLivro } = require("../controladores/livros.js")

const router = Router()

router.get("/", getLivros)

router.get("/:id", getLivro)

router.post("/", postLivro)

router.patch("/", )

router.delete("/", (req, res) => {
    res.send("Requisição do tipo delete")
})

module.exports = router