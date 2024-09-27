const caseCostingService = require("../services/caseCostingService");

class CaseCostingController {
  async getAllCaseCostings(req, res) {
    try {
      const caseCostings = await caseCostingService.getAllCaseCostings();
      res.status(200).json(caseCostings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCaseCostingById(req, res) {
    try {
      const caseCosting = await caseCostingService.getCaseCostingById(
        req.params.id
      );
      if (!caseCosting) {
        return res.status(404).json({ message: "Case Costing not found" });
      }
      res.status(200).json(caseCosting);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCaseCosting(req, res) {
    try {
      const caseCosting = await caseCostingService.createCaseCosting(req.body);
      res.status(201).json(caseCosting);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCaseCosting(req, res) {
    try {
      const caseCosting = await caseCostingService.updateCaseCosting(
        req.params.id,
        req.body
      );
      res.status(200).json(caseCosting);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCaseCosting(req, res) {
    try {
      await caseCostingService.deleteCaseCosting(req.params.id);
      res.status(200).json({ message: "Case Costing deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CaseCostingController();
