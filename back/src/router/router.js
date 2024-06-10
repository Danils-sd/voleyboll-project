const express = require("express");

const router = express.Router();

const snikersControllers = require("../controllers/snikers.controller");
const bollsControllers = require("../controllers/bolls.controller");
const adminControllers = require("../controllers/adminAuth.controller");
const zakazControllers = require("../controllers/zakaz.controller");

router.get("/snikers/:brand", snikersControllers.getSnikers);

router.get("/bolls/:brand", bollsControllers.getBolls);

router.get("/admin-auth/:login/:password", adminControllers.auth);

router.post("/zakaz", zakazControllers.addZakaz)

module.exports = router;