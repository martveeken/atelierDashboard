import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewProducerForm from './NewProducerForm';
import { newProducer } from '../../actions';

class NewProducer extends Component {
  onSubmit = (formValues) => {
    const {
      name, description, street, postalcode, city, telephone, email, website, country,
    } = formValues;
    const formObject = {
      name,
      description,
      contact: {
        street,
        postalcode,
        city,
        country,
        telephone,
        website,
        email,
      },
    };
    this.props.newProducer(formObject);
  }

  renderError() {
    let error = '';
    if (this.props.error) {
      error = (
        <div>
            {this.props.error}
        </div>
      );
    }
    return error;
  }

  render() {
    return (
      <div className="ui main text container">
        <h1>Add producer</h1>
        {this.renderError()}
        <NewProducerForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const {
    error, loading,
  } = auth;

  return {
    error, loading,
  };
};

export default connect(
  mapStateToProps,
  { newProducer },
)(NewProducer);
