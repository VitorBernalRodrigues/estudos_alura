const express = require("express")

const app = express()

const port = 8000

app.get("/", (req, res) => {
    res.send("Olá, Mundo")
})

app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
})