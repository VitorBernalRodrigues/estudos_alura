const express = require("express")
const rotasLivros = require("./rotas/livros.js")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(express.cors({origin: "*"}))
app.use("/livros", rotasLivros)

const port = 8000

app.get("/", (req, res) => {
    res.send("Olá, Mundo")
})

app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
})