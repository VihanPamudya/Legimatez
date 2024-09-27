const ClientInfo = require("../models/ClientInfo");

class ClientInfoService {
  async getAllClientInfo() {
    return await ClientInfo.findAll();
  }

  async getClientInfoById(id) {
    return await ClientInfo.findByPk(id);
  }

  async createClientInfo(clientInfoData) {
    return await ClientInfo.create(clientInfoData);
  }

  async updateClientInfo(id, clientInfoData) {
    const clientInfo = await ClientInfo.findByPk(id);
    if (!clientInfo) {
      throw new Error("Client Info not found");
    }
    return await clientInfo.update(clientInfoData);
  }

  async deleteClientInfo(id) {
    const clientInfo = await ClientInfo.findByPk(id);
    if (!clientInfo) {
      throw new Error("Client Info not found");
    }
    await clientInfo.destroy();
    return { message: "Client Info deleted successfully" };
  }
}

module.exports = new ClientInfoService();
