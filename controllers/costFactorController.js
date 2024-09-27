const costFactorService = require("../services/costFactorService");

class CostFactorController {
  async getAllCostFactors(req, res) {
    try {
      const costFactors = await costFactorService.getAllCostFactors();
      res.status(200).json(costFactors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCostFactorById(req, res) {
    try {
      const costFactor = await costFactorService.getCostFactorById(
        req.params.id
      );
      if (!costFactor) {
        return res.status(404).json({ message: "Cost Factor not found" });
      }
      res.status(200).json(costFactor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCostFactor(req, res) {
    try {
      const costFactor = await costFactorService.createCostFactor(req.body);
      res.status(201).json(costFactor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCostFactor(req, res) {
    try {
      const costFactor = await costFactorService.updateCostFactor(
        req.params.id,
        req.body
      );
      res.status(200).json(costFactor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCostFactor(req, res) {
    try {
      await costFactorService.deleteCostFactor(req.params.id);
      res.status(200).json({ message: "Cost Factor deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CostFactorController();
