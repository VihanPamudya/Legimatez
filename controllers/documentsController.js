const documentsService = require("../services/documentsService");

class DocumentsController {
  async getAllDocuments(req, res) {
    try {
      const documents = await documentsService.getAllDocuments();
      res.status(200).json(documents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getDocumentById(req, res) {
    try {
      const document = await documentsService.getDocumentById(req.params.id);
      if (!document) {
        return res.status(404).json({ message: "Document not found" });
      }
      res.status(200).json(document);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createDocument(req, res) {
    try {
      const document = await documentsService.createDocument(req.body);
      res.status(201).json(document);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateDocument(req, res) {
    try {
      const document = await documentsService.updateDocument(
        req.params.id,
        req.body
      );
      res.status(200).json(document);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteDocument(req, res) {
    try {
      await documentsService.deleteDocument(req.params.id);
      res.status(200).json({ message: "Document deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new DocumentsController();
