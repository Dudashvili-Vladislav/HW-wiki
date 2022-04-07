import $api from "../../index";

class StationstApi {
  async getStations() {
    try {
      return await $api.get("/stations");
    } catch (e) {
      throw new Error(e);
    }
  }

  async createStation(name, comment) {
    try {
      return await $api.post("/stations", {
        name,
        comment,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async getStationsById(id) {
    try {
      return await $api.get(`/stations/${id}`);
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteStationById(id) {
    try {
      return await $api.delete(`/stations/${id}`);
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateStationsById(id, name, comment) {
    try {
      return await $api.put(`/stations/${id}`, {
        name,
        comment,
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new StationstApi();
