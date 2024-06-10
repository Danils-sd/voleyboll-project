const snikersServices = require("../services/snikers.service");

async function getSnikers(req, res){
    try {
        res.json({data: await snikersServices.getSnikers(req.params["brand"])});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getSnikers
}