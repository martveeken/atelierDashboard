import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class AddContactForm extends React.Component {
  componentDidMount() {
    if (this.props.contact) {
      this.handleInitialize();
    }
  }

  onSubmit(formValues) {
    const { id } = this.props;
    this.props.onSubmit(id, formValues);
  }

  handleInitialize() {
    const {
      name,
      role,
      telephone,
      email,
    } = this.props.contact;
    const initData = {
      name,
      role,
      telephone,
      email,
    };
    this.props.initialize(initData);
  }

  render() {
    const {
      pristine,
      submitting,
      id,
    } = this.props;
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className="ui form">
          <h4 className="ui dividing header">Contact Information</h4>
          <div className="fields">
            <div className="four wide field">
              <label>Name</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="four wide field">
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="info@example.com"
              />
            </div>
            <div className="four wide field">
              <label>Telephone</label>
                <div className="field">
                  <Field
                    name="telephone"
                    component="input"
                    type="text"
                    placeholder="Telephone"
                  />
                </div>
            </div>
            <div className="four wide field">
              <label>Role</label>
                <div className="field">
                  <Field
                    name="role"
                    component="input"
                    type="text"
                    placeholder="Role"
                  />
                </div>
            </div>

          </div>
          <button
            onSubmit={this.onSubmit}
            className="ui button positive"
            type="submit"
            disabled={pristine || submitting}
          >
            Add
          </button>
          <Link to={`/designer/${id}`} className="ui button">
            Cancel
          </Link>
        </form>
    );
  }
}


export default reduxForm({
  form: 'addDesignerContactForm', // a unique identifier for this form
})(AddContactForm);
