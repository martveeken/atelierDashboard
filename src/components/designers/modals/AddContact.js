import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddContactForm from './ContactForm';
import Modal from '../../../container/Modal';
import history from '../../../history';
import { newDesignerContact } from '../../../actions';

class AddDesignerContact extends Component {
  onSubmit = (id, formValues) => {
    const {
      name, email, telephone, role,
    } = formValues;
    const formObject = {
      name,
      email,
      telephone,
      role,
    };
    this.props.newDesignerContact(id, formObject);
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
)(AddDesignerContact);
