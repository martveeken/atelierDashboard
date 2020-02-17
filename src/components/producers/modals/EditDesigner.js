import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddContactForm from './AddContactForm';
import Modal from '../../../container/Modal';
import history from '../../../history';
import { newDesignerContact } from '../../../actions';

class EditContact extends Component {
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

  renderContent(id) {
    return (<AddContactForm id={id} onSubmit={this.onSubmit} />);
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <Modal
        title="Add designer contact"
        content={this.renderContent(id)}
        onDismiss={() => history.push(`/designer/${id}`)}
      />
    );
  }
}

export default connect(
  null,
  { newDesignerContact },
)(EditContact);
