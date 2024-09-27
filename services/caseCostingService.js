const CaseCosting = require("../models/CaseCosting");

class CaseCostingService {
  async getAllCaseCostings() {
    return await CaseCosting.findAll();
  }

  async getCaseCostingById(id) {
    return await CaseCosting.findByPk(id);
  }

  async createCaseCosting(caseCostingData) {
    return await CaseCosting.create(caseCostingData);
  }

  async updateCaseCosting(id, caseCostingData) {
    const caseCosting = await CaseCosting.findByPk(id);
    if (!caseCosting) {
      throw new Error("Case Costing not found");
    }
    return await caseCosting.update(caseCostingData);
  }

  async deleteCaseCosting(id) {
    const caseCosting = await CaseCosting.findByPk(id);
    if (!caseCosting) {
      throw new Error("Case Costing not found");
    }
    await caseCosting.destroy();
    return { message: "Case Costing deleted successfully" };
  }
}

module.exports = new CaseCostingService();
