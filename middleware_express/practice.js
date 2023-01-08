const express = require("express")

const app = express()
const PORT = 8000

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
})

app.use((req, res, next) => {
    console.log(`${JSON.stringify(req.headers)}`);
    next();
})

app.get("/", (req, res) => {
    res.status(200)
    res.send("Hello World")
})


app.use((req, res, next) =>{
    const apiKey = req.query.apiKey;
    if(apiKey == "ebedossantos"){
       next();
    }else{
        res.status(401)
        res.send("Unauthorized")}
})
app.get("/users", (req, res)=>{
    res.status(200)
    res.json(
        [
            {
                id: 2,
                user: "Ebe"

            }
            

        ]
    )
})


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})

