const caseKeyDatesService = require("../services/caseKeyDatesService");

class CaseKeyDatesController {
  async getAllCaseKeyDates(req, res) {
    try {
      const caseKeyDates = await caseKeyDatesService.getAllCaseKeyDates();
      res.status(200).json(caseKeyDates);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCaseKeyDateById(req, res) {
    try {
      const caseKeyDate = await caseKeyDatesService.getCaseKeyDateById(
        req.params.id
      );
      if (!caseKeyDate) {
        return res.status(404).json({ message: "Case Key Date not found" });
      }
      res.status(200).json(caseKeyDate);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCaseKeyDate(req, res) {
    try {
      const caseKeyDate = await caseKeyDatesService.createCaseKeyDate(req.body);
      res.status(201).json(caseKeyDate);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCaseKeyDate(req, res) {
    try {
      const caseKeyDate = await caseKeyDatesService.updateCaseKeyDate(
        req.params.id,
        req.body
      );
      res.status(200).json(caseKeyDate);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCaseKeyDate(req, res) {
    try {
      await caseKeyDatesService.deleteCaseKeyDate(req.params.id);
      res.status(200).json({ message: "Case Key Date deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CaseKeyDatesController();
