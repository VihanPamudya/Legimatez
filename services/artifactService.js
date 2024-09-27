const Artifact = require("../models/Artifact");

class ArtifactService {
  async getAllArtifacts() {
    return await Artifact.findAll();
  }

  async getArtifactById(id) {
    return await Artifact.findByPk(id);
  }

  async createArtifact(artifactData) {
    return await Artifact.create(artifactData);
  }

  async updateArtifact(id, artifactData) {
    const artifact = await Artifact.findByPk(id);
    if (!artifact) {
      throw new Error("Artifact not found");
    }
    return await artifact.update(artifactData);
  }

  async deleteArtifact(id) {
    const artifact = await Artifact.findByPk(id);
    if (!artifact) {
      throw new Error("Artifact not found");
    }
    await artifact.destroy();
    return { message: "Artifact deleted successfully" };
  }
}

module.exports = new ArtifactService();
