const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Add third party middleware to log all requests to the console
app.use(logger('dev'));

// Add third party middleware to parse the request body
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.status(200)
    res.send("Hello World");
})

// Req.body is an object that contains the request body. It is parsed by the bodyParser middleware.
app.use((req, res, next) => {
    const apiKey = req.body.apiKey;
    if (apiKey) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});


app.get("/users", (req, res) => {
    res.status(200)
    res.json([
        {
            id: 1,
            name: "Yemi Olanrewaju",
        },
        {
            id: 2,
            name: "Oluwasegun Olaoluwa",
        }
    ]);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})