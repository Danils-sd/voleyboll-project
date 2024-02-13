const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3010;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());


const DBNike = require('./DataB/DBNike.json');
const DBAsics = require('./DataB/DBAsics.json');
const DBAdidas = require('./DataB/DBAdidas.json');

const DBMikasa = require('./DataB/DBMikasa.json');
const DBMolten = require('./DataB/DBMolten.json');


app.get("/api/sneakers/nike", (req, res) => {
    res.json({data: DBNike});
})

app.get("/api/sneakers/asics", (req, res) => {
    res.json({data: DBAsics});
})

app.get("/api/sneakers/adidas", (req, res) => {
    res.json({data: DBAdidas});
})


app.get("/api/balls/mikasa", (req, res) => {
    res.json({data: DBMikasa});
})

app.get("/api/balls/molten", (req, res) => {
    res.json({data: DBMolten});
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})