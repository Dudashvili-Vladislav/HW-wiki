import $api from "../../index";

class UsersApi {
  async createUsers({ name, comment, login, password }) {
    try {
      return await $api.post("https://piar.meew.me/users", {
        name,
        comment,
        login,
        password,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async authUser({ login, password }) {
    try {
      return await $api.post("https://piar.meew.me/users/auth", {
        login,
        password,
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async getAllUsers() {
    try {
      return await $api.get("https://piar.meew.me/users");
    } catch (e) {
      throw new Error(e);
    }
  }

  async getMe() {
    try {
      return await $api.get("https://piar.meew.me/users/me");
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteUser(id) {
    try {
      return await $api.delete(`https://piar.meew.me/users/${id}`);
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateUser({ id, name, comment, login, password }) {
    try {
      return await $api.patch(`https://piar.meew.me/users/${id}`, {
        name,
        comment,
        login,
        password,
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new UsersApi();
