import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProducers } from '../../actions';
import ProducerIndexExpand from './ProducerIndexExpand';

class ProducersIndex extends Component {
  componentDidMount() {
    this.props.fetchProducers();
  }

  renderProducersExpand() {
    return (
      this.props.producers.map(producer => (
        <ProducerIndexExpand key={`${producer.id}`} producer={producer} />
      ))
    );
  }

  render() {
    const { error, loading } = this.props;
    if (error) {
      return (
        <div>
          Error!
          {error.message}
        </div>
      );
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui main container">
      <h1 className="ui center aligned icon header">
        <i className="circular industry icon" />
        Producers
      </h1>
        <p>
          <Link to="/newproducer" className="item">
            <button className="ui button" type="submit">New producer</button>
          </Link>
        </p>
        <table className="ui fixed single line selectable celled table">
          <thead>
            <tr>
              <th className="one wide">Id</th>
              <th className="three wide">Name</th>
              <th className="nine wide">Description</th>
              <th className="two wide center aligned">Status</th>
              <th className="two wide center aligned">Details</th>
            </tr>
          </thead>
          <tbody>
              {this.renderProducersExpand()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  producers: state.producers.results,
  loading: state.producers.loading,
  error: state.producers.error,
});

export default connect(mapStateToProps, {
  fetchProducers,
})(ProducersIndex);
