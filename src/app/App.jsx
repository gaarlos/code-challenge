import React, { Component } from 'react';
import request from '../request';
import { ARTICLES_QUERY } from '../queries';
import AppWithNavigation from 'app/AppWithNavigation';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return <AppWithNavigation />;
  }
}

export default App;
