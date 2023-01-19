const express = require("express")

const app = express()
const PORT = 3000

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static("public"))

app.get("/about", (req, res)=>{
    res.render("about")
})



app.listen(PORT , ()=> {
    console.log(`Server running on localhost:${PORT}`)
})