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
    id
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

export const UPDATE_ARTICLE_QUERY = ({
  id,
  author = '',
  content = '',
  published = false,
  tags = [],
  title = '',
}) => `{
  updateArticle(
    id: "${id}",
    author: "${author}",
    content: "${content}",
    excerpt: "${content.slice(0, 350)}",
    published: ${published},
    tags: [${tags.map(tag => `"${tag}"`)}],
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

export const ADD_ARTICLE_QUERY = ({
  author = 'No one',
  content = 'Nothing',
  published = false,
  tags = [],
  title = 'No title',
}) => `{
  addArticle(
    author: "${author}",
    content: "${content}",
    excerpt: "${content.slice(0, 350)}",
    published: ${published},
    tags: [${tags.map(tag => `"${tag}"`)}],
    title: "${title}",
  ) {
    author
    content
    excerpt
    published
    tags
    title
  }
}`;
