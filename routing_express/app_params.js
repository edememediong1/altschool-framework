const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

const users = [
    {
        id: 1,
        name: 'John',
        age: 30
    },
    {
        id: 2,
        name: 'Jane',
        age: 25
    },
]

const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'This is post 1'
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is post 2'
    },
]

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.end('Home Page');
});

// Grab single param from a url using colon
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    if (!user) {
        res.status(404).send('User not found');
    }
    res.send(user);

});

// Grab multiple params from a url using colon
app.get('/users/:id/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    const user = users.find(user => user.id === parseInt(id) && user.name === name);
    if (!user) {
        res.status(404).send('User not found');
    }
    res.json(user);

});


// Use regular expression to explicitly match a url pattern
app.get('/posts/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        res.status(404).send('Post not found');
    }
    res.json(post);
});

// Get query params
app.get('/query', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Hello ${name}! You are ${age} years old.`);
});


// Get body params
app.post('/profile', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Hello ${name}! You are ${age} years old.`);
});


//catch all route
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
