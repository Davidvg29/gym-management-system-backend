const express = require("express")
const app = express()
const PORT = 3001

const router = require("./src/routes/router.js")
app.use("/", router)

app.listen(PORT, ()=>{
    console.log(`server listen port ${PORT}`)
})