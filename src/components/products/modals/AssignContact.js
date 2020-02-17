import React, { Component } from 'react';
import { connect } from 'react-redux';

import AssignContactForm from './ContactForm';
import Modal from '../../../container/Modal';
import history from '../../../history';
import { assignContactToProduct } from '../../../actions';

class AssignContact extends Component {
  onSubmit = (formValues) => {
    const { product } = this.props.location.state;
    const data = {
      productId: product._id,
      contactId: formValues.contact,
    };
    this.props.assignContactToProduct(data);
  }

  renderContent(id, designer) {
    return (<AssignContactForm id={id} onSubmit={this.onSubmit} designer={designer} />);
  }

  render() {
  //  console.log(this.props.location.state)
    // const id = this.props.product._id;
    const { designer, product } = this.props.location.state;
    const id = product._id;
    return (
      <Modal
        title="Assign a designer contact to product"
        content={this.renderContent(id, designer)}
        onDismiss={() => history.push(`/product/${id}`)}
      />
    );
  }
}

export default connect(
  null,
  { assignContactToProduct },
)(AssignContact);
