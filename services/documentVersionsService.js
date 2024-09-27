const DocumentVersions = require("../models/DocumentVersions");

class DocumentVersionsService {
  async getAllDocumentVersions() {
    return await DocumentVersions.findAll();
  }

  async getDocumentVersionById(id) {
    return await DocumentVersions.findByPk(id);
  }

  async createDocumentVersion(documentVersionData) {
    return await DocumentVersions.create(documentVersionData);
  }

  async updateDocumentVersion(id, documentVersionData) {
    const documentVersion = await DocumentVersions.findByPk(id);
    if (!documentVersion) {
      throw new Error("Document Version not found");
    }
    return await documentVersion.update(documentVersionData);
  }

  async deleteDocumentVersion(id) {
    const documentVersion = await DocumentVersions.findByPk(id);
    if (!documentVersion) {
      throw new Error("Document Version not found");
    }
    await documentVersion.destroy();
    return { message: "Document Version deleted successfully" };
  }
}

module.exports = new DocumentVersionsService();
