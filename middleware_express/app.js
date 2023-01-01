const express = require('express');

const app = express();
const PORT = 3000;

//To create a middleware, we need to use the app.use() method.
// E.g, The following code will create a middleware that will log all request to the console.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next(); //This is required to continue to the next middleware or route handler.
});



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

// The following code will create a middleware that checks if the request an api key is present.
// If the api key is present, the request will continue to the next middleware or route handler.
// If the api key is not present, the request will be rejected.
app.use((req, res, next) => {
    const apiKey = req.query.apiKey;
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