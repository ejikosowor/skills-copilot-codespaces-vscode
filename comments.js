// Create web server with Express
const express = require('express');
const app = express();

// Home
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Create an array to store comments
const comments = [];

// GET /comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        body: req.body.body
    };
    comments.push(comment);
    res.send(comment);
});