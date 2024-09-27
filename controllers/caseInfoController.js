const caseInfoService = require("../services/caseInfoService");

class CaseInfoController {
  async getAllCaseInfo(req, res) {
    try {
      const caseInfos = await caseInfoService.getAllCaseInfo();
      res.status(200).json(caseInfos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCaseInfoById(req, res) {
    try {
      const caseInfo = await caseInfoService.getCaseInfoById(req.params.id);
      if (!caseInfo) {
        return res.status(404).json({ message: "Case Info not found" });
      }
      res.status(200).json(caseInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCaseInfo(req, res) {
    try {
      const caseInfo = await caseInfoService.createCaseInfo(req.body);
      res.status(201).json(caseInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCaseInfo(req, res) {
    try {
      const caseInfo = await caseInfoService.updateCaseInfo(
        req.params.id,
        req.body
      );
      res.status(200).json(caseInfo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCaseInfo(req, res) {
    try {
      await caseInfoService.deleteCaseInfo(req.params.id);
      res.status(200).json({ message: "Case Info deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CaseInfoController();
