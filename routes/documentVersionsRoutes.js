const express = require("express");
const documentVersionsController = require("../controllers/documentVersionsController");

const router = express.Router();

router.get("/", documentVersionsController.getAllDocumentVersions); 
router.get("/:id", documentVersionsController.getDocumentVersionById); 
router.post("/", documentVersionsController.createDocumentVersion); 
router.put("/:id", documentVersionsController.updateDocumentVersion); 
router.delete("/:id", documentVersionsController.deleteDocumentVersion);

module.exports = router;
