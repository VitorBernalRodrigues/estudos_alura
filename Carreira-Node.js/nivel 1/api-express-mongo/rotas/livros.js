const { Router } = require("express")
const { getLivros, getLivro, patchLivro, deleteLivro} = require("../controladores/livros.js")

const router = Router()

router.get("/", getLivros)

router.get("/:id", getLivro)

router.post("/", postLivro)

router.patch("/:id", patchLivro)

router.delete("/", deleteLivro)

module.exports = router