import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProduct, getDesigner } from '../../actions';
import SinglePageGeneralInfo from './subcomponents/SinglePageGeneralInfo';
import SinglePageDesignerCard from './subcomponents/SinglePageDesignerCard';
// import SinglePageContacts from './subcomponents/SinglePageContacts';

class SingleProductPage extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getProduct(id);
  }

  render() {
    if (!this.props.product) {
      return <div>Loading...</div>;
    }
    // console.log(this.props)
    const { product, designer } = this.props;

    return (
      <div className="ui main container full grid stackable relaxed">
        <SinglePageGeneralInfo product={product} />
        <div className="three column one row">

          <SinglePageDesignerCard product={product} designer={designer} />

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.product,
  loading: state.products.loading,
  error: state.products.error,
  designer: state.products.designer,
});

export default connect(mapStateToProps, {
  getProduct, getDesigner,
})(SingleProductPage);
