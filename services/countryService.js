const Country = require("../models/Country");

class CountryService {
  async getAllCountries() {
    return await Country.findAll();
  }

  async getCountryById(id) {
    return await Country.findByPk(id);
  }

  async createCountry(countryData) {
    return await Country.create(countryData);
  }

  async updateCountry(id, countryData) {
    const country = await Country.findByPk(id);
    if (!country) {
      throw new Error("Country not found");
    }
    return await country.update(countryData);
  }

  async deleteCountry(id) {
    const country = await Country.findByPk(id);
    if (!country) {
      throw new Error("Country not found");
    }
    await country.destroy();
    return { message: "Country deleted successfully" };
  }
}

module.exports = new CountryService();
