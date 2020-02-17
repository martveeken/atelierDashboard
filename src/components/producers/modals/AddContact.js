import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddContactForm from './ContactForm';
import Modal from '../../../container/Modal';
import history from '../../../history';
import { newProducerContact } from '../../../actions';

class AddProducerContact extends Component {
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
    this.props.newProducerContact(id, formObject);
  }

  renderContent(id) {
    return (<AddContactForm id={id} onSubmit={this.onSubmit} />);
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <Modal
        title="Add producer contact"
        content={this.renderContent(id)}
        onDismiss={() => history.push(`/producer/${id}`)}
      />
    );
  }
}

export default connect(
  null,
  { newProducerContact },
)(AddProducerContact);
