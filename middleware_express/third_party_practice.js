const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

// middleware that logs all request to the console
app.use(logger("dev"));

// middleware that parses the request body
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(req.body)
    const apiKey = req.body.apiKey
    if(apiKey){
        next();
    }else{
        res.status(401).send("Error message")
    }
})

app.get("/users", (req, res)=>{
    res.status(200)
    res.json([
            {
                id: 1,
                username: "Ebe dos santos"
            },
            {
                id: 2,
                username: "Emediong"
            }
        ]
    )
})

app.listen(PORT, ()=>{
   console.log(`Server running at localhost:${PORT}`) 
})