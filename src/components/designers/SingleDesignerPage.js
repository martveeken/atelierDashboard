import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDesigner } from '../../actions';
import SinglePageGeneralInfo from './subcomponents/SinglePageGeneralInfo';
import SinglePageAddressCard from './subcomponents/SinglePageAddressCard';
import SinglePageContacts from './subcomponents/SinglePageContacts';
import SinglePageProducts from './subcomponents/SinglePageProducts';


class SingleDesignerPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDesigner(id);
  }

  render() {
    if (!this.props.designer) {
      return <div>Loading...</div>;
    }
    const { designer, products } = this.props;

    return (
      <div className="ui main container full grid stackable relaxed">
        <SinglePageGeneralInfo designer={designer} />
        <div className="three column one row">

          <SinglePageAddressCard designer={designer} />

          <SinglePageContacts designer={designer} />

        </div>
        <div className="one column one row">
          <SinglePageProducts products={products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  designer: state.designers.designer,
  loading: state.designers.loading,
  error: state.designers.error,
  products: state.designers.products,
});

export default connect(mapStateToProps, {
  getDesigner,
})(SingleDesignerPage);
