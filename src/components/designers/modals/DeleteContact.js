import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../../../container/Modal';
import history from '../../../history';
import { deleteDesignerContact } from '../../../actions';

class DesignerDeleteContact extends Component {
  renderActions() {
    // just for clarity, we need two id's: contact id to update the contact _id in the database
    // and we need designer id, this is to route again to the designers
    const contactId = this.props.location.state.contact._id;
    const designerId = this.props.location.state.id;
    return (
      <React.Fragment>
        <button
          type="submit"
          onClick={() => this.props.deleteDesignerContact(contactId, designerId)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to={`/designer/${designerId}`} className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    return 'Are you sure you want to delete this contact?';
  }

  render() {
    const { id } = this.props.location.state;
    return (
      <Modal
        title="Delete this contact"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push(`/designer/${id}`)}
      />
    );
  }
}

export default connect(
  null,
  { deleteDesignerContact },
)(DesignerDeleteContact);
