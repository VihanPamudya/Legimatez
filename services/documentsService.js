const Documents = require("../models/Documents");

class DocumentsService {
  async getAllDocuments() {
    return await Documents.findAll();
  }

  async getDocumentById(id) {
    return await Documents.findByPk(id);
  }

  async createDocument(documentData) {
    return await Documents.create(documentData);
  }

  async updateDocument(id, documentData) {
    const document = await Documents.findByPk(id);
    if (!document) {
      throw new Error("Document not found");
    }
    return await document.update(documentData);
  }

  async deleteDocument(id) {
    const document = await Documents.findByPk(id);
    if (!document) {
      throw new Error("Document not found");
    }
    await document.destroy();
    return { message: "Document deleted successfully" };
  }
}

module.exports = new DocumentsService();
