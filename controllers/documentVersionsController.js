const documentVersionsService = require("../services/documentVersionsService");

class DocumentVersionsController {
  async getAllDocumentVersions(req, res) {
    try {
      const documentVersions =
        await documentVersionsService.getAllDocumentVersions();
      res.status(200).json(documentVersions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getDocumentVersionById(req, res) {
    try {
      const documentVersion =
        await documentVersionsService.getDocumentVersionById(req.params.id);
      if (!documentVersion) {
        return res.status(404).json({ message: "Document Version not found" });
      }
      res.status(200).json(documentVersion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createDocumentVersion(req, res) {
    try {
      const documentVersion =
        await documentVersionsService.createDocumentVersion(req.body);
      res.status(201).json(documentVersion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateDocumentVersion(req, res) {
    try {
      const documentVersion =
        await documentVersionsService.updateDocumentVersion(
          req.params.id,
          req.body
        );
      res.status(200).json(documentVersion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteDocumentVersion(req, res) {
    try {
      await documentVersionsService.deleteDocumentVersion(req.params.id);
      res
        .status(200)
        .json({ message: "Document Version deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new DocumentVersionsController();
