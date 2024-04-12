const express = require("express")
const server = express()

const PORT = process.env.PORT || 3001

const {db} = require("./src/db")

const morgan = require("morgan")
const cors = require("cors")
server.use(cors())
server.use(morgan("dev"))

const routes = require("./src/routes/router.js")

server.use(express.json())

server.use("/", routes)

db.sync({force:true})
.then(()=>{
    server.listen(PORT, ()=>{
        console.log("server is on port " + PORT)
    })
})