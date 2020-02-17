import React, { Component } from 'react';
import ProductsRow from './SinglePageProductsRow';

class SinglePageProducts extends Component {
  renderProductsRow() {
    return (
      this.props.products.map((product) => {
        return <ProductsRow key={`${product.id}`} product={product} />;
      })
    );
  }

  render() {
    return (
      <div className="ui main container">
        <h2 className="ui center aligned icon header">
          Products
        </h2>
        <table className="ui fixed single line selectable celled table">
          <thead>
            <tr>
              <th className="two wide">Id</th>
              <th className="three wide">Name</th>
              <th className="nine wide">Description</th>
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

export default SinglePageProducts;
