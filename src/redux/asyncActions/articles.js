import articles from "../../api/articles";

export const fetchArticles = (value) => {
  return async function (dispatch) {
    const articlesRes = await articles.getArticles(value);
    console.log("articlesRes", articlesRes);
  };
};