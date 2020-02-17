import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchDesigners } from '../../actions';
import DesignerIndexRow from './DesignerIndexRow';

class DesignersIndex extends Component {
  componentDidMount() {
    this.props.fetchDesigners();
  }

  renderDesignerRow() {
    return (
      this.props.designers.map(designer => (
        <DesignerIndexRow key={`${designer.id}`} designer={designer} />
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
        <i className="circular users icon" />
        Designers
      </h1>
        <p>
          <Link to="/newdesigner" className="item">
            <button className="ui button" type="submit">New designer</button>
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
              {this.renderDesignerRow()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  designers: state.designers.results,
  loading: state.designers.loading,
  error: state.designers.error,
});

export default connect(mapStateToProps, {
  fetchDesigners,
})(DesignersIndex);
