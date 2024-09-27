const express = require("express");
const caseKeyDatesController = require("../controllers/caseKeyDatesController");

const router = express.Router();

router.get("/", caseKeyDatesController.getAllCaseKeyDates); 
router.get("/:id", caseKeyDatesController.getCaseKeyDateById); 
router.post("/", caseKeyDatesController.createCaseKeyDate); 
router.put("/:id", caseKeyDatesController.updateCaseKeyDate);
router.delete("/:id", caseKeyDatesController.deleteCaseKeyDate);

module.exports = router;
