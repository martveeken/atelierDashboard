import React from 'react';
import { Field, reduxForm } from 'redux-form';

class NewProductForm extends React.Component {
  onSubmit(formValues) {
    this.props.onSubmit(formValues);
  }

  renderDesigners() {
    const { designers } = this.props;
    if (!designers) {
      return null;
    }
    return (
      designers.map(designer => (
        <option key={designer._id} value={designer._id}>{designer.name}</option>
      ))
    );
  }

  renderCategories() {
    // Implement this later via the database
    const categories = ['bags', 'shoes', 'clothes', 'bedsheets'];
    return (
      categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))
    );
  }

  renderStatus() {
    // Implement this later via the database
    const categories = ['init', 'sampling', 'production'];
    return (
      categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))
    );
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
            <div className="six wide field">
              <label>Designer</label>
                <div className="field">
                  <Field className="ui fluid search dropdown" name="designer" component="select">
                    <option />
                    {this.renderDesigners()}
                  </Field>
                </div>
            </div>
            <div className="six wide field">
              <label>Status</label>
                <div className="field">
                  <Field className="ui fluid search dropdown" name="status" component="select">
                    <option />
                    {this.renderStatus()}
                  </Field>
                </div>
            </div>
            <div className="six wide field">
              <label>Category</label>
                <div className="field">
                  <Field className="ui fluid search dropdown" name="category" component="select">
                    <option />
                    {this.renderCategories()}
                  </Field>
                </div>
            </div>
          </div>

          <button className="ui button" type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
    );
  }
}


export default reduxForm({
  form: 'addProduct', // a unique identifier for this form
})(NewProductForm);
