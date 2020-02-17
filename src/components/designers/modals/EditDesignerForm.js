import React from 'react';
import { Field, reduxForm } from 'redux-form';

class EditDesignerForm extends React.Component {
  onSubmit(formValues) {
    this.props.onSubmit(formValues);
  }

  render() {
    const {
      pristine,
      submitting,
    } = this.props;
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className="ui form">
          <h4 className="ui dividing header">General information</h4>
          <div className="field">
            <label>Name</label>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Description"
            />
          </div>

          <h4 className="ui dividing header">Address Information</h4>

          <div className="fields">
            <div className="seven wide field">
              <label>Street</label>
              <Field
                name="street"
                component="input"
                type="text"
                placeholder="Street"
              />
            </div>
            <div className="three wide field">
              <label>Postcode</label>
              <Field
                name="postalcode"
                component="input"
                type="text"
                placeholder="Post Code"
              />
            </div>
            <div className="six wide field">
              <label>City and Country</label>
              <div className="two fields">
                <div className="field">
                  <Field
                    name="city"
                    component="input"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div className="field">
                  <Field className="ui fluid search dropdown" name="country" component="select">
                    <option />
                    <option value="Netherlands">Netherlands</option>
                  </Field>
                </div>
              </div>
            </div>
          </div>

          <h4 className="ui dividing header">Contact Information</h4>
          <div className="fields">
            <div className="five wide field">
              <label>Telephone</label>
              <Field
                name="telephone"
                component="input"
                type="text"
                placeholder="Telephone"
              />
            </div>
            <div className="six wide field">
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="info@example.com"
              />
            </div>
            <div className="five wide field">
              <label>Website</label>
                <div className="field">
                  <Field
                    name="website"
                    component="input"
                    type="text"
                    placeholder="www.example.com"
                  />
                </div>
            </div>
          </div>
          <button className="ui button" type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
    );
  }
}


export default reduxForm({
  form: 'editDesigner', // a unique identifier for this form
})(EditDesignerForm);
