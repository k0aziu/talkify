const express = require("express");
const http = require("http");
// const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

const router = express.Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/chat", function (req, res) {
    res.sendFile(path.join(__dirname + "/chat.html"));
});

router.get("/custom-room", function (req, res) {
    res.sendFile(path.join(__dirname + "/room.html"));
});

app.use(express.static('public'));
app.use("/", router);

// wss.on("connection", (ws) => {
//     console.log("Nowe połączenie WebSocket!");

//     ws.on("message", (message) => {
//         console.log(`Otrzymano wiadomość: ${message}`);
        
//         // Przykład: Odsyłamy otrzymaną wiadomość do wszystkich klientów (broadcast)
//         // wss.clients.forEach((client) => {
//         //     if (client !== ws && client.readyState === WebSocket.OPEN) {
//         //         client.send(message);
//         //     }
//         // });
//     });

//     ws.on("close", () => {
//         console.log("Połączenie WebSocket zostało zamknięte.");
//     });
// });

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Serwer wystartował http://localhost:${port}/ 🚀`);
});