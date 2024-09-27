const CostFactor = require("../models/CostFactor");

class CostFactorService {
  async getAllCostFactors() {
    return await CostFactor.findAll();
  }

  async getCostFactorById(id) {
    return await CostFactor.findByPk(id);
  }

  async createCostFactor(costFactorData) {
    return await CostFactor.create(costFactorData);
  }

  async updateCostFactor(id, costFactorData) {
    const costFactor = await CostFactor.findByPk(id);
    if (!costFactor) {
      throw new Error("Cost Factor not found");
    }
    return await costFactor.update(costFactorData);
  }

  async deleteCostFactor(id) {
    const costFactor = await CostFactor.findByPk(id);
    if (!costFactor) {
      throw new Error("Cost Factor not found");
    }
    await costFactor.destroy();
    return { message: "Cost Factor deleted successfully" };
  }
}

module.exports = new CostFactorService();
