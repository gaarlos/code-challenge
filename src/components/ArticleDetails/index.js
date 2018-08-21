import React from 'react';
import PropTypes from 'prop-types';
import AutosizeInput from 'react-input-autosize';

import TagsInput from 'components/Tags';

class ArticleDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: props.author,
      content: `${props.content}`,
      published: props.published,
      tags: props.tags,
      title: props.title,
      withChanges: true,
    };

    this.authorWidthRef = React.createRef();
  }

  handleSaveChanges = () => {
    const { saveChanges } = this.props;
    const { author, published, content, tags, title } = this.state;
    const newArticle = { author, published, content, tags, title };

    saveChanges({ article: newArticle });
  }

  handleOnTagsChange = (newTags) => {
    this.setState({
      tags: newTags,
    });
  }

  handleOnTitleChange = (event) => {
    const newTitle = event.target.value;

    this.setState({
      title: newTitle,
    });
  }

  handleOnAuthorChange = (event) => {
    const newAuthor = event.target.value;

    this.setState({
      author: newAuthor,
    });
  }

  render() {
    const { author, published, content, tags, title } = this.state;

    return (
      <div className="article-details">
        <div className="article-details--header">
          <AutosizeInput value={title} className="title" placeholder="Title" onChange={this.handleOnTitleChange} />
          <div className="author">
            <AutosizeInput value={author} placeholder="Author" onChange={this.handleOnAuthorChange} />
            <span>{` - ${published ? 'Published' : 'Not published'}`}</span>
          </div>
          <div className="btn save-button" onClick={this.handleSaveChanges}>Save</div>
        </div>
        <div className="article-details--body">
          {content.split(/\r?\n/).join('\r\n\r\n')}
        </div>
        <TagsInput tags={tags} onChange={this.handleOnTagsChange} />
      </div>
    );
  }
}

export default ArticleDetails;

ArticleDetails.defaultProps = {
  author: '',
  content: '',
  published: false,
  tags: [],
  title: '',
};

ArticleDetails.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  published: PropTypes.bool,
  saveChanges: PropTypes.func.isRequired,
  tags: PropTypes.array,
  title: PropTypes.string,
};
