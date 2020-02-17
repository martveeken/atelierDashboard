import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import Modal from '../../../container/Modal';
import history from '../../../history';
import { editDesignerContact } from '../../../actions';

class EditDesignerContact extends Component {
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
    // just for clarity, we need two id's: contact id to update the contact _id in the database
    // and we need designer id, this is to route again to the designers
    const designerId = id;
    const contactId = this.props.location.state.contact._id;
    this.props.editDesignerContact(contactId, designerId, formObject);
  }

  renderContent(id) {
    const { contact } = this.props.location.state;
    return (<ContactForm id={id} onSubmit={this.onSubmit} contact={contact} />);
  }

  render() {
    const { id } = this.props.location.state;
    return (
      <Modal
        title="Edit designer contact"
        content={this.renderContent(id)}
        onDismiss={() => history.push(`/designer/${id}`)}
      />
    );
  }
}

export default connect(
  null,
  { editDesignerContact },
)(EditDesignerContact);
