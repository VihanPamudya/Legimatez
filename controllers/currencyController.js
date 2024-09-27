const currencyService = require("../services/currencyService");

class CurrencyController {
  async getAllCurrencies(req, res) {
    try {
      const currencies = await currencyService.getAllCurrencies();
      res.status(200).json(currencies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCurrencyById(req, res) {
    try {
      const currency = await currencyService.getCurrencyById(req.params.id);
      if (!currency) {
        return res.status(404).json({ message: "Currency not found" });
      }
      res.status(200).json(currency);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCurrency(req, res) {
    try {
      const currency = await currencyService.createCurrency(req.body);
      res.status(201).json(currency);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCurrency(req, res) {
    try {
      const currency = await currencyService.updateCurrency(
        req.params.id,
        req.body
      );
      res.status(200).json(currency);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCurrency(req, res) {
    try {
      await currencyService.deleteCurrency(req.params.id);
      res.status(200).json({ message: "Currency deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CurrencyController();
