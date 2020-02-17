import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewDesignerForm from './NewDesignerForm';
import { newDesigner } from '../../actions';

class NewDesigner extends Component {
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
    this.props.newDesigner(formObject);
  }

  renderError() {
    if (this.props.error) {
      return <div>{this.props.error}</div>;
    }
    return <div />;
  }

  render() {
    return (
      <div className="ui main text container">
        <h1>Add designer</h1>
        {this.renderError()}
        <NewDesignerForm onSubmit={this.onSubmit} />
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
  { newDesigner },
)(NewDesigner);
