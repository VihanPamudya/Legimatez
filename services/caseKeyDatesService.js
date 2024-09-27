const CaseKeyDates = require("../models/CaseKeyDates");

class CaseKeyDatesService {
  async getAllCaseKeyDates() {
    return await CaseKeyDates.findAll();
  }

  async getCaseKeyDateById(id) {
    return await CaseKeyDates.findByPk(id);
  }

  async createCaseKeyDate(caseKeyDateData) {
    return await CaseKeyDates.create(caseKeyDateData);
  }

  async updateCaseKeyDate(id, caseKeyDateData) {
    const caseKeyDate = await CaseKeyDates.findByPk(id);
    if (!caseKeyDate) {
      throw new Error("Case Key Date not found");
    }
    return await caseKeyDate.update(caseKeyDateData);
  }

  async deleteCaseKeyDate(id) {
    const caseKeyDate = await CaseKeyDates.findByPk(id);
    if (!caseKeyDate) {
      throw new Error("Case Key Date not found");
    }
    await caseKeyDate.destroy();
    return { message: "Case Key Date deleted successfully" };
  }
}

module.exports = new CaseKeyDatesService();
