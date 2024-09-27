const express = require("express");
const currencyController = require("../controllers/currencyController");

const router = express.Router();

router.get("/", currencyController.getAllCurrencies); 
router.get("/:id", currencyController.getCurrencyById); 
router.post("/", currencyController.createCurrency); 
router.put("/:id", currencyController.updateCurrency); 
router.delete("/:id", currencyController.deleteCurrency);

module.exports = router;
