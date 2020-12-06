const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.listen(port , ()=> {
    console.log(`Server running at ${port}`);
});

app.get('/', (req, res) => {
    res.send("Hello World!");
});
require('./api/models/database');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
