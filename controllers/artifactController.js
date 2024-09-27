const artifactService = require("../services/artifactService");

class ArtifactController {
  async getAllArtifacts(req, res) {
    try {
      const artifacts = await artifactService.getAllArtifacts();
      res.status(200).json(artifacts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getArtifactById(req, res) {
    try {
      const artifact = await artifactService.getArtifactById(req.params.id);
      if (!artifact) {
        return res.status(404).json({ message: "Artifact not found" });
      }
      res.status(200).json(artifact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createArtifact(req, res) {
    try {
      const artifact = await artifactService.createArtifact(req.body);
      res.status(201).json(artifact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateArtifact(req, res) {
    try {
      const artifact = await artifactService.updateArtifact(
        req.params.id,
        req.body
      );
      res.status(200).json(artifact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteArtifact(req, res) {
    try {
      await artifactService.deleteArtifact(req.params.id);
      res.status(200).json({ message: "Artifact deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ArtifactController();
