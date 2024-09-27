const express = require("express");
const costFactorController = require("../controllers/costFactorController");

const router = express.Router();

router.get("/", costFactorController.getAllCostFactors); 
router.get("/:id", costFactorController.getCostFactorById); 
router.post("/", costFactorController.createCostFactor); 
router.put("/:id", costFactorController.updateCostFactor); 
router.delete("/:id", costFactorController.deleteCostFactor);

module.exports = router;
