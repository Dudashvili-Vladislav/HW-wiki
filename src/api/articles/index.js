import $api from "../index";

class ArticlesApi {
  async getArticles(searchString) {
    try {
      return await $api.get("https://en.wikipedia.org/w/api.php", {
        action: "query",
        list: "search",
        srsearch: searchString,
        format: "json",
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new ArticlesApi();
