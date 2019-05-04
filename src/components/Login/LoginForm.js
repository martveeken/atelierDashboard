import React from 'react';
import {
  Form,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
  } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="username">
       <Form.Label column sm="2">
         Username
       </Form.Label>
       <Col sm="10">
         <Field
           name="username"
           component="input"
           type="text"
           placeholder="Username"
         />
       </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="password">
       <Form.Label column sm="2">
         Password
       </Form.Label>
       <Col sm="10">
         <Field
           name="password"
           component="input"
           type="password"
           placeholder="Password"
         />
       </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="password">
        <Button variant="primary" type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(LoginForm);
