
const express = require("express")
const server = express()

// configurar pasta publica
server.use(express.static("public"))

// configurar caminhos da minha aplicaçcao
// pagina inicial
// req: requisicao
// res: resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})
server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})


// ligar o servidor
server.listen(3000)