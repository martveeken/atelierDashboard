import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewProductForm from './NewProductForm';
import { newProduct, fetchDesignersNameId } from '../../actions';

class NewProduct extends Component {
  componentDidMount() {
    this.props.fetchDesignersNameId();
  }

  onSubmit = (formValues) => {
    const {
      name, description, designer, status, category,
    } = formValues;
    const formObject = {
      name,
      description,
      designer_id: designer,
      status,
      category,
    };
    this.props.newProduct(formObject);
  }

  renderError() {
    if (this.props.error) {
      return <div>{this.props.error}</div>;
    }
    return <div />;
  }

  render() {
    const { designers } = this.props;
    return (
      <div className="ui main text container">
        <h1>Add product</h1>
        {this.renderError()}
        <NewProductForm onSubmit={this.onSubmit} designers={designers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  designers: state.designers.idname,
});

export default connect(
  mapStateToProps,
  { newProduct, fetchDesignersNameId },
)(NewProduct);
