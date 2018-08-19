import React from 'react';
import PropTypes from 'prop-types';

class ArticleDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: props.author,
      content: props.content,
      published: props.published,
      tags: props.tags,
      title: props.title,
    };

    this.addTags = this.addTags.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  addTags(event) {
    if (event.charCode !== 13) {
      return;
    }

    const tagsString = event.target.value;

    if (!tagsString) {
      return;
    }

    const newTags = tagsString
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');

    this.setState(prevState => ({
      tags: [...prevState.tags, ...newTags],
    }));

    // eslint-disable-next-line
    event.target.value = '';
  }

  removeTag(toRemoveTag) {
    this.setState(prevState => ({
      tags: prevState.tags.filter(tag => tag !== toRemoveTag),
    }));
  }

  render() {
    const { author, published, content, tags, title } = this.state;
    const { deleteArticle } = this.props;

    return (
      <div className="article-details">
        <div className="article-details--header">
          <span className="title">{title}</span>
          <span className="author">{`${author} - ${
            published ? 'Published' : 'Not published'
          }`}</span>
          <div className="save-button" onClick={deleteArticle}>
            Remove
          </div>
          <div className="remove-button" onClick={deleteArticle}>
            Remove
          </div>
        </div>
        <div className="article-details--body">
          {content.split(/\r?\n/).join('\r\n\r\n')}
        </div>
        <div className="article-details--footer">
          Tags:
          {tags &&
            tags.map(tag => (
              <span key={tag} className="tag">
                <div className="tag--times" onClick={() => this.removeTag(tag)}>&times;</div>
                {tag}
              </span>
            ))}
          <input className="tag--add-tag" type="text" placeholder="Add tags separated by commas" onKeyPress={this.addTags} />
        </div>
      </div>
    );
  }
}

export default ArticleDetails;

ArticleDetails.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  deleteArticle: PropTypes.func,
  published: PropTypes.bool,
  tags: PropTypes.array,
  title: PropTypes.string,
};
