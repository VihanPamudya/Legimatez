const Currency = require("../models/Currency");

class CurrencyService {
  async getAllCurrencies() {
    return await Currency.findAll();
  }

  async getCurrencyById(id) {
    return await Currency.findByPk(id);
  }

  async createCurrency(currencyData) {
    return await Currency.create(currencyData);
  }

  async updateCurrency(id, currencyData) {
    const currency = await Currency.findByPk(id);
    if (!currency) {
      throw new Error("Currency not found");
    }
    return await currency.update(currencyData);
  }

  async deleteCurrency(id) {
    const currency = await Currency.findByPk(id);
    if (!currency) {
      throw new Error("Currency not found");
    }
    await currency.destroy();
    return { message: "Currency deleted successfully" };
  }
}

module.exports = new CurrencyService();
