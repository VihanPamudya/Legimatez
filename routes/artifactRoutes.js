const express = require("express");
const artifactController = require("../controllers/artifactController");

const router = express.Router();


router.get("/", artifactController.getAllArtifacts); 
router.get("/:id", artifactController.getArtifactById); 
router.post("/", artifactController.createArtifact); 
router.put("/:id", artifactController.updateArtifact); 
router.delete("/:id", artifactController.deleteArtifact);
module.exports = router;
