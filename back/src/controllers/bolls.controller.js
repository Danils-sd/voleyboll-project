const bollsServices = require("../services/bolls.service");

async function getBolls(req, res){
    try {
        res.json({data: await bollsServices.getBolls(req.params["brand"])});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getBolls
}