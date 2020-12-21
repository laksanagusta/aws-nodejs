const express = require("express")
const app = express()
const PORT = "8000"

app.get("/", (req, res) => {
    res.send("Its working!!")
})

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})