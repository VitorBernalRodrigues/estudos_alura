const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
    res.send("Olá Mundo")
})

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