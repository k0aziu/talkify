const express = require("express")
const http = require("http")
const path = require("path")
const helmet = require("helmet")

const app = express()
const server = http.createServer(app)

app.use(helmet())

app.use(express.static('public'))

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/chat", (req, res) => {
    res.render("chat")
})

app.get("/room", (req, res) => {
    res.render("room")
})

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`Serwer wystartował http://localhost:${port}/ 🚀`)
})
