const countryService = require("../services/countryService");

class CountryController {
  async getAllCountries(req, res) {
    try {
      const countries = await countryService.getAllCountries();
      res.status(200).json(countries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCountryById(req, res) {
    try {
      const country = await countryService.getCountryById(req.params.id);
      if (!country) {
        return res.status(404).json({ message: "Country not found" });
      }
      res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCountry(req, res) {
    try {
      const country = await countryService.createCountry(req.body);
      res.status(201).json(country);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCountry(req, res) {
    try {
      const country = await countryService.updateCountry(
        req.params.id,
        req.body
      );
      res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCountry(req, res) {
    try {
      await countryService.deleteCountry(req.params.id);
      res.status(200).json({ message: "Country deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CountryController();
