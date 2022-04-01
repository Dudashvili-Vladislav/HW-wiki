import $api from "../index";

class ArticlesApi {
  async getArticles(searchString) {
    try {
      return await $api.get("https://ru.wikipedia.org/w/api.php?action=query&meta=tokens");
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new ArticlesApi();
