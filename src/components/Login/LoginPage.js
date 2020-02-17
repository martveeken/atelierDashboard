import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../container/Modal';
import LoginForm from './LoginForm';
import { loginUser } from '../../actions';

class LoginUser extends Component {
  onSubmit = (formValues) => {
    this.props.loginUser(formValues.username, formValues.password);
  }

  renderError() {
    let error = '';
    if (this.props.error) {
      error = (
        <div>
            {this.props.error}
        </div>
      );
    }
    return error;
  }

  renderContent() {
    return (
      <div>
        {this.renderError()}
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }

  render() {
    return (
      <Modal
        title="Login"
        content={this.renderContent()}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const {
    error, loading,
  } = auth;

  return {
    error, loading,
  };
};

export default connect(mapStateToProps, {
  loginUser,
})(LoginUser);
