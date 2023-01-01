const express = require('express');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    //Express extends the response object with a lot of utility methods like : 
    // res.send() ==>  Used to send a response to the client
    // res.json() ==>  Used to send a JSON object to the client
    // res.status() ==>  Used to set the status code of the response
    // res.sendFile() ==> Used to send a file to the client
    // res.render() ==> Used to render a view to the client

    res.status(200)
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})