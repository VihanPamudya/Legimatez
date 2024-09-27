const express = require("express");
const caseInfoController = require("../controllers/caseInfoController");

const router = express.Router();

router.get("/", caseInfoController.getAllCaseInfo); 
router.get("/:id", caseInfoController.getCaseInfoById); 
router.post("/", caseInfoController.createCaseInfo); 
router.put("/:id", caseInfoController.updateCaseInfo); 
router.delete("/:id", caseInfoController.deleteCaseInfo); 

module.exports = router;
