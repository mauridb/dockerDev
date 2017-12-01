'use strict';

const express = require('express');

// constants
const PORT = 80;
const HOST = '0.0.0.0';


// application
const app = express();
app.get('/', (req, res) => {
    res.send('hello from node.js! \n');
});


app.listen(PORT, HOST);
console.log('running on http://${HOST}:${PORT}');
