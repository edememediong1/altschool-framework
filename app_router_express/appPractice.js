const express = require("express")
const bodyParser = require("body-parser")

const booksRoute = require("./routes/booksPractice")
const authorsRoute = require("./routes/authorsPractice")

const app = express()
const PORT = 3000

app.use(express.static("public"))
app.use(bodyParser.json())

app.use("/books", booksRoute)
app.use("/authors",authorsRoute)

app.get("/", (req, res)=>{
    res.send("Hello There")
})

app.get("/about", (req, res)=>{
    res.end("About page")
})


app.listen(PORT, () => {
    console.log(`server running on localhost:${3000}`)
})