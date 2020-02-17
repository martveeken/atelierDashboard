import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProducts, fetchDesignersNameId } from '../../actions';
import ProductsRow from './ProductsRow';

class ProductsIndex extends Component {
  componentDidMount() {
    const { status } = this.props.match.params;
    if (status === 'init' || status === 'sampling' || status === 'production') {
      this.props.fetchProducts(status);
    }
    this.props.fetchDesignersNameId();
  }

  componentWillReceiveProps(newProps) {
    const { status } = newProps.match.params;
    if (status !== this.props.match.params.status) {
      if (status === 'init' || status === 'sampling' || status === 'production') {
        this.props.fetchProducts(status);
      }
    }
  }

  renderProductsRow() {
    const { designers } = this.props;
    if (!designers) return null;
    return (
      this.props.products.map((product) => {
        let designer;
        designers.map((designerMap) => {
          if (designerMap._id === product.designer_id) {
            designer = designerMap;
          }
          return designer;
        });
        return <ProductsRow key={`${product.id}`} product={product} designer={designer} />;
      })
    );
  }

  render() {
    const { status } = this.props.match.params;
    let header = '';
    if (status === 'init') header = 'in initialising mode';
    else if (status === 'sampling') header = 'in sampling mode';
    else if (status === 'production') header = 'in production mode';

    const { error, loading } = this.props;
    if (error) {
      return (
        <div>
          Error!
          {error.message}
        </div>
      );
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui main container">
        <h1 className="ui center aligned icon header">
          <i className="circular gift icon" />
          {`Products in ${header}`}
        </h1>
        <p>
          <Link to="/newproduct" className="item">
            <button className="ui button" type="submit">New product</button>
          </Link>
        </p>
        <table className="ui fixed single line selectable celled table">
          <thead>
            <tr>
              <th className="two wide">Id</th>
              <th className="three wide">Name</th>
              <th className="nine wide">Description</th>
              <th className="two wide">Designer</th>
              <th className="two wide center aligned">Status</th>
              <th className="two wide center aligned">Details</th>
            </tr>
          </thead>
          <tbody>
              {this.renderProductsRow()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.results,
  loading: state.products.loading,
  error: state.products.error,
  designers: state.designers.idname,
});

export default connect(mapStateToProps, {
  fetchProducts, fetchDesignersNameId,
})(ProductsIndex);
