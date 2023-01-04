const express = require("express")

const app = express()
const PORT = 8000

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
})

app.get("/", (req, res) => {
    res.status(200)
    res.send("Hello World")
})


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})

