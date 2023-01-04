const express = require("express") 

const app = express()
const PORT = 8000

app.get("/", (req , res) => {
    res.status(200)
    // res.send("Hello world")
    res.json({
        message: "Hello World"
    })
})

app.listen(PORT, () => {
    console.log(`sever running on http://localhost:${PORT}`)
})
