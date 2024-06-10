const zakazService = require("../services/zakaz.service");

async function addZakaz(req, res){
    try {
        res.json({body: await zakazService.addZakaz(req.body.date, req.body.name, req.body.number, req.body.email, req.body.stuf)});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addZakaz
}