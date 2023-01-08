const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

app.use(logger("dev"))

app.use(express.static("public"))

app.use(bodyParser.json())

// app.get("/about", (req, res) =>{
//     res.status(200)
//     res.render("/about.html")
// })

app.get("/", (req, res)=>{
    res.status(200)
    res.json(
        {
        message: "Hello World"
    }
    )
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})