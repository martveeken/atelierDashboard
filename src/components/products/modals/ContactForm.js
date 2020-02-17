import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class AssignContactForm extends React.Component {
  componentDidMount() {
    this.handleInitialize();
  }

  onSubmit(formValues) {
    this.props.onSubmit(formValues);
  }

  handleInitialize() {
    const contact = this.props.designer.contacts[0]._id;
    const initData = {
      contact,
    };
    this.props.initialize(initData);
  }

  renderContactOptions() {
    return this.props.designer.contacts.map((contact) => {
      return (<option key={contact._id} value={contact._id}>{contact.name}</option>);
    });
  }

  render() {
    const {
      submitting,
      id,
    } = this.props;
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className="ui form">
          <h4 className="ui dividing header">Contacts</h4>
          <div className="fields">
            <div className="four wide field">
              <label>Name</label>
              <Field className="ui fluid search dropdown" name="contact" component="select">
                {this.renderContactOptions()}
              </Field>
            </div>

          </div>
          <button
            onSubmit={this.onSubmit}
            className="ui button positive"
            type="submit"
            disabled={submitting}
          >
            Add
          </button>
          <Link to={`/product/${id}`} className="ui button">
            Cancel
          </Link>
        </form>
    );
  }
}


export default reduxForm({
  form: 'assignDesignerProductForm', // a unique identifier for this form
})(AssignContactForm);
