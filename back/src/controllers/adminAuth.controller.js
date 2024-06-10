const adminService = require("../services/adminAuth.service");

async function auth(req, res){
    try {
        const login = req.params["login"];
        const password = req.params["password"];
        res.json({data: await adminService.auth(login, password)});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    auth
}