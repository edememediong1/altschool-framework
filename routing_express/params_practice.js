const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

const users = [
    {
        id: 1,
        name: "Emediong",
        age: 24
    },
    {
        id: 2,
        name: "Anne",
        age: 21
    }
]

const posts =[
    {
        id: 1,
        name: "Eden",
        age: 3
    },
    {
        id: 2,
        name: "Zoe",
        age: 5
    },
    {
        id: 3,
        name: "Treashi",
        age: 7
    },
    {
        id: 4,
        name: "Elias",
        age: 10

    }
]
app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.end("Launched Successfully")
})

app.get("/users/:id", (req, res)=>{
    const id = req.params.id;
    //In the array users, check for item in with the same id as the parsed id
    const user = users.find(user => user.id === parseInt(id))
    if(!user){
        res.status(404).send("User not found")
    }
    res.send(user);
})

app.get("/posts/:id/:name", (req, res)=>{
    const id = req.params.id
    const name = req.params.name

    const post = posts.find(post => post.id=== parseInt(id) && post.name === name)

    if(!post){
        res.status(401).send("User not found")
    }res.send(post)
})

app.get("/posts/:id([0-9]+)",(req, res)=>{
    const id = req.params.id

    const post= posts.find( post => post.id == parseInt(id))
    if(!post){
        res.status(401).send("User not found")
    }res.send(post)
})


app.get("/query",(req, res)=>{
    const name = req.query.name 
    const age = req.query.age

    res.send(`The name is ${name} and the age is ${age} years old`)
})

app.post("/profile", (req, res)=>{
    const name = req.body.name
    const age = req.body.age

    res.send(`The name is ${name} and the age is ${age}`)
})

app.get("*", (req, res)=>{
    res.status(401).send("Page not found")
})

app.listen(PORT, ()=>{
    console.log(`Server running at localhost:${PORT}`)
    
})
 
