import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// Login
import PrivateRoute from './privateRoute';
import LoginPage from '../components/login/LoginPage';

// DashboardPage
import DashboardPage from '../components/DashboardPage';

// Producers
import ProducersIndex from '../components/producers/ProducersIndex';
import NewProducer from '../components/producers/NewProducer';
import SingleProducerPage from '../components/producers/SingleProducerPage';
import AddProducerContact from '../components/producers/modals/AddContact';
import EditProducerContact from '../components/producers/modals/EditContact';
import DeleteProducerContact from '../components/producers/modals/DeleteContact';

// Designers
import DesignersIndex from '../components/designers/DesignersIndex';
import NewDesigner from '../components/designers/NewDesigner';
import SingleDesignerPage from '../components/designers/SingleDesignerPage';
import AddDesignerContact from '../components/designers/modals/AddContact';
import EditDesignerContact from '../components/designers/modals/EditContact';
import DeleteDesignerContact from '../components/designers/modals/DeleteContact';

// Products
import ProductsIndex from '../components/products/ProductsIndex';
import NewProduct from '../components/products/NewProduct';
import SingleProductPage from '../components/products/SingleProductPage';

import AssignContact from '../components/products/modals/AssignContact';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/login" component={LoginPage} />

      <PrivateRoute path="/dashboard" component={DashboardPage} />

      <PrivateRoute path="/newproducer" component={NewProducer} />
      <PrivateRoute path="/producers" component={ProducersIndex} />
      <PrivateRoute path="/producer/:id" component={SingleProducerPage} />

      <PrivateRoute path="/produceraddcontact/:id" component={AddProducerContact} />
      <PrivateRoute path="/producereditcontact/" component={EditProducerContact} />
      <PrivateRoute path="/producerdeletecontact/" component={DeleteProducerContact} />


      <PrivateRoute path="/designers" component={DesignersIndex} />
      <PrivateRoute path="/newdesigner" component={NewDesigner} />
      <PrivateRoute path="/designer/:id" component={SingleDesignerPage} />

      <PrivateRoute path="/designeraddcontact/:id" component={AddDesignerContact} />
      <PrivateRoute path="/designereditcontact/" component={EditDesignerContact} />
      <PrivateRoute path="/designerdeletecontact/" component={DeleteDesignerContact} />


      <PrivateRoute path="/products/:status" component={ProductsIndex} />
      <PrivateRoute path="/newproduct" component={NewProduct} />
      <PrivateRoute path="/product/:id" component={SingleProductPage} />

      <PrivateRoute path="/assigncontact" component={AssignContact} />

    </Switch>
  );
};

export default Routes;
