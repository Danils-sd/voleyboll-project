const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3010;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());


const DB = require('./DB.json')
app.get("/api", (req, res) => {
    res.json({data: DB});
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})