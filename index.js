const express = require('express');
const app = express();
const port = 3000;

appget('/', (req, res) => { res.send('Arithmetic service - Hellow world!'); });
app.listen(port);