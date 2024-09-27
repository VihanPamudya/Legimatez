const CaseInfo = require("../models/CaseInfo");

class CaseInfoService {
  async getAllCaseInfo() {
    return await CaseInfo.findAll();
  }

  async getCaseInfoById(id) {
    return await CaseInfo.findByPk(id);
  }

  async createCaseInfo(caseInfoData) {
    return await CaseInfo.create(caseInfoData);
  }

  async updateCaseInfo(id, caseInfoData) {
    const caseInfo = await CaseInfo.findByPk(id);
    if (!caseInfo) {
      throw new Error("Case Info not found");
    }
    return await caseInfo.update(caseInfoData);
  }

  async deleteCaseInfo(id) {
    const caseInfo = await CaseInfo.findByPk(id);
    if (!caseInfo) {
      throw new Error("Case Info not found");
    }
    await caseInfo.destroy();
    return { message: "Case Info deleted successfully" };
  }
}

module.exports = new CaseInfoService();
