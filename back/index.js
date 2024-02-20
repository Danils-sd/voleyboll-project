const express = require('express');
const cors = require('cors');
const fs = require("fs");
const PORT = process.env.PORT || 3010;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const DBNike = require('./DataB/DBNike.json');
const DBAsics = require('./DataB/DBAsics.json');
const DBAdidas = require('./DataB/DBAdidas.json');

const DBMikasa = require('./DataB/DBMikasa.json');
const DBMolten = require('./DataB/DBMolten.json');

const DBZak = require("./DataB/DBZak.json");

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

app.get("/api/admin-auth/:login/:password", (req, res) => {
    const json1 = fs.readFileSync("./DataB/DBAdmin.json", "utf8");
    const object = JSON.parse(json1);
    if((object.login === req.params["login"]) && (object.password === req.params["password"])){
        res.json({data: {
            res: true,
            content: DBZak
        }});
    } else {
        res.json({data: {
            res: false
        }});
    }
})

app.post("/api/zak", (req, res) => {
    const json1 = fs.readFileSync("./DataB/DBZak.json", "utf8")
    const object = JSON.parse(json1);
    object.id = Number(object.id) + 1;
    req.body.id = object.id;
    object.stuf.push(req.body);
    console.log(object);
    fs.writeFileSync("./DataB/DBZak.json", JSON.stringify(object, null, "\t"));
    console.log(fs.readFileSync("./DataB/DBZak.json", "utf8"));
    res.send({body: object.id});
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})