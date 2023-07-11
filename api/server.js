const express = require("express");
require("dotenv").config();
const port = 7777;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.on("finish", () => {
        // the 'finish' event will be emitted when the response is handed over to the OS
        console.log(
            `Request: ${req.method} ${req.originalUrl} ${res.statusCode}`
        );
    });
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the Recipe Management System");
});
