export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_BY_ID_QUERY = articleId => `{
  article(id: "${articleId}") {
    author
    excerpt
    id
    title
  }
}`;
