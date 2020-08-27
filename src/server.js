const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/index.html", (req,res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/estude.html", (req,res) => {

    return res.sendFile(__dirname + '/views/estude.html')
})
.get("/darAulas.html", (req,res) => {

    return res.sendFile(__dirname + "/views/darAulas.html")
})
.listen(5500)