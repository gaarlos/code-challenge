import React from 'react';
import PropTypes from 'prop-types';
import AutosizeInput from 'react-input-autosize';
import AutosizeTextarea from 'react-textarea-autosize';

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
    const excerpt = encodeURI(content.trim().slice(0, 350));
    const formattedContent = encodeURI(content.trim());
    const newArticle = { author, published, content: formattedContent, excerpt, tags, title };

    saveChanges({ article: newArticle });
  }

  handleOnTagsChange = newTags => {
    this.setState({
      tags: newTags,
    });
  }

  handleOnTitleChange = event => {
    const newTitle = event.target.value;

    this.setState({
      title: newTitle,
    });
  }

  handleOnAuthorChange = event => {
    const newAuthor = event.target.value;

    this.setState({
      author: newAuthor,
    });
  }

  handleOnContentChange = event => {
    const newContent = event.target.value;

    this.setState({
      content: newContent,
    });
  }

  handleOnPublish = () => this.setState({
    published: true,
  });

  render() {
    const { author, published, content, tags, title } = this.state;

    return (
      <div className="article-details">
        <div className="article-details--header">
          <AutosizeInput value={title} className="title" placeholder="Title" onChange={this.handleOnTitleChange} />
          <div className="author">
            <AutosizeInput value={author} placeholder="Author" onChange={this.handleOnAuthorChange} />
            <span>{'\u00A0-\u00A0'}</span>
            {
              published
                ? <span>Published</span>
                : [<span key="text">Not published&nbsp;</span>, <span key="publish" className="publish" onClick={this.handleOnPublish}>(publish)</span>]
            }
          </div>
          <div className="btn save-button" onClick={this.handleSaveChanges}>Save</div>
        </div>
        <AutosizeTextarea className="article-details--body" onChange={this.handleOnContentChange} spellCheck="false" placeholder="Your content goes here..." value={content} />
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
