const express = require("express");
const clientInfoController = require("../controllers/clientInfoController");

const router = express.Router();

router.get("/", clientInfoController.getAllClientInfo); 
router.get("/:id", clientInfoController.getClientInfoById); 
router.post("/", clientInfoController.createClientInfo); 
router.put("/:id", clientInfoController.updateClientInfo); 
router.delete("/:id", clientInfoController.deleteClientInfo);

module.exports = router;
