import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';

const WithLoading = WrappedComponent =>
  class ContainerComponent extends React.Component {
    static propTypes = {
      loading: PropTypes.bool.isRequired,
    };

    render() {
      const { loading } = this.props;
      return loading ? <Loading /> : <WrappedComponent {...this.props} />;
    }
  };

export default WithLoading;
