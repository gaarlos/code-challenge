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
    title
    author
    content
    published
    tags
  }
}`;

export const DELETE_ARTICLE_QUERY = articleId => `{
  deleteArticle(id: "${articleId}") {
    id
  }
}`;

export const UPDATE_ARTICLE = ({ id, author, content, excerpt, published, tags, title }) => `{
  updateArticle(
    id: "${id}",
    author: "${author}",
    content: "${content}",
    excerpt: "${excerpt}",
    published: "${published}",
    tags: "${tags}",
    title: "${title}",
  ) {
    author
    content
    excerpt
    id
    published
    tags
    title
  }
}`;

export const ADD_ARTICLE = ({ author, content, excerpt, published, tags, title }) => `{
  addArticle(
    author: "${author}",
    content: "${content}",
    excerpt: "${excerpt}",
    published: "${published}",
    tags: "${tags}",
    title: "${title}",
  ) {
    author
    content
    excerpt
    id
    published
    tags
    title
  }
}`;
