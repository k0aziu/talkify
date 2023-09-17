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

app.get("/random", (req, res) => {
    res.render("chat")
})

app.get(/^\/room-[a-zA-Z0-9]+$/, (req, res) => {
    res.render("room")
})

app.get("/search-rooms", (req, res) => {
    res.render("search")
})

app.use((req, res, next) => {
    res.status(404).render("404");
});

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`Serwer wystartował http://localhost:${port}/ 🚀`)
})
