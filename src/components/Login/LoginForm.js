import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <h4 className="ui dividing header">Contact Information</h4>
      <div className="fields">
        <div className="six wide field">
          <label>Name</label>
           <Field
             name="username"
             component="input"
             type="text"
             placeholder="Username"
           />
        </div>
        <div className="six wide field">
          <label>Password</label>
           <Field
             name="password"
             component="input"
             type="password"
             placeholder="Password"
           />
        </div>
      </div>
      <div className="fields">
        <div className="six wide field">
          <button
            variant="primary"
            className="ui button positive"
            type="submit"
            disabled={pristine || submitting}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(LoginForm);
