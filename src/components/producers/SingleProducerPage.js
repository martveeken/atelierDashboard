import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProducer } from '../../actions';
import SinglePageGeneralInfo from './subcomponents/SinglePageGeneralInfo';
import SinglePageAddressCard from './subcomponents/SinglePageAddressCard';
import SinglePageContacts from './subcomponents/SinglePageContacts';

class SingleProducerPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProducer(id);
  }

  render() {
    if (!this.props.producer) {
      return <div>Loading...</div>;
    }
    const { producer } = this.props;

    return (
      <div className="ui main container full grid stackable relaxed">
        <SinglePageGeneralInfo producer={producer} />
        <div className="three column one row">

          <SinglePageAddressCard producer={producer} />

          <SinglePageContacts producer={producer} />

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  producer: state.producers.producer,
  loading: state.producers.loading,
  error: state.producers.error,
});

export default connect(mapStateToProps, {
  getProducer,
})(SingleProducerPage);
