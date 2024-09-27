const express = require("express");
const caseCostingController = require("../controllers/caseCostingController");

const router = express.Router();

router.get("/", caseCostingController.getAllCaseCostings); 
router.get("/:id", caseCostingController.getCaseCostingById); 
router.post("/", caseCostingController.createCaseCosting); 
router.put("/:id", caseCostingController.updateCaseCosting); 
router.delete("/:id", caseCostingController.deleteCaseCosting);

module.exports = router;
