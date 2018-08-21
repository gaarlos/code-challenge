import React from 'react';
import PropTypes from 'prop-types';

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: props.tags,
    };

    this.addTags = this.addTags.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.updateTags = this.updateTags.bind(this);
  }

  updateTags() {
    const { tags } = this.state;
    const { onChange } = this.props;

    onChange(tags);
  }

  addTags(event) {
    const { tags } = this.state;

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
      .filter(tag => tag !== '')
      .filter(tag => !tags.find(t => tag === t));

    this.setState(prevState => ({
      tags: [...prevState.tags, ...newTags],
    }), this.updateTags);

    // eslint-disable-next-line
    event.target.value = '';
  }

  removeTag(toRemoveTag) {
    this.setState(prevState => ({
      tags: prevState.tags.filter(tag => tag !== toRemoveTag),
    }), this.updateTags);
  }

  render() {
    const { tags } = this.state;

    return (
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
    );
  }
}

export default Tags;

Tags.defaultProps = {
  tags: [],
};

Tags.propTypes = {
  onChange: PropTypes.func,
  tags: PropTypes.array,
};
