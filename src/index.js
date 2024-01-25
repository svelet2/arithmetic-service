const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => { res.send('Arithmetic service - Hello world!'); });

app.get('/add/:a/:b', (req, res) => { res.json(Number(req.params.a) + Number(req.params.b)); });

app.listen(port);
