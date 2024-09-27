const clientInfoService = require("../services/clientInfoService");

class ClientInfoController {
  async getAllClientInfo(req, res) {
    try {
      const clientInfos = await clientInfoService.getAllClientInfo();
      res.status(200).json(clientInfos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getClientInfoById(req, res) {
    try {
      const clientInfo = await clientInfoService.getClientInfoById(
        req.params.id
      );
      if (!clientInfo) {
        return res.status(404).json({ message: "Client Info not found" });
      }
      res.status(200).json(clientInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createClientInfo(req, res) {
    try {
      const clientInfo = await clientInfoService.createClientInfo(req.body);
      res.status(201).json(clientInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateClientInfo(req, res) {
    try {
      const clientInfo = await clientInfoService.updateClientInfo(
        req.params.id,
        req.body
      );
      res.status(200).json(clientInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteClientInfo(req, res) {
    try {
      await clientInfoService.deleteClientInfo(req.params.id);
      res.status(200).json({ message: "Client Info deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ClientInfoController();
