const { Router } = require("express")

const router = Router()

router.get("/", (req, res) => {
    try {
        // throw new Error("teste")
        res.send("Olá Mundo")
    } catch (error) {
        res.status(500)
        res.send(error.mensage)
    }
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