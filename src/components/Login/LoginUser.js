import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { loginUser } from '../../actions';

class LoginUser extends Component {
  onSubmit = formValues => {
    console.log(formValues.username)
    this.props.loginUser(formValues.username, formValues.password);
  }

  renderError() {
    if (this.props.error) {
      return (
        <div>
            {this.props.error}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderError()}
        <LoginForm onSubmit={this.onSubmit} />
      </div>
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
