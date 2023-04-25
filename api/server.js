const express = require("express")

const server = express()
server.use(express.json());


const router = require("./cars/cars-router")

server.use("/api/cars", router)

// SİHRİNİZİ GÖSTERİN

module.exports = server
