import React from 'react';
import { Provider } from 'react-redux';

import AppWithLayout from 'app/AppWithLayout';
import storeConfig from 'store/store';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: storeConfig,
    };
  }

  render() {
    const { store } = this.state;

    return (
      <Provider store={store}>
        <AppWithLayout />
      </Provider>
    );
  }
}
