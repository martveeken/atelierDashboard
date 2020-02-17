import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="container">
        <Link to="/dashboard" className="item">
          Labl dashboard
        </Link>
        <Link to="/producers" className="item">
          Producers
        </Link>
        <Link to="/designers" className="item">
          Designers
        </Link>
        <div className="ui simple dropdown">
          Products
          <i className="dropdown icon" />
          <div className="menu">
          <Link to="/newproduct" className="item">
            New product
          </Link>
            <Link to="/products/init" className="item">
              Initialising
            </Link>
            <Link to="/products/sampling" className="item">
              Sampling
            </Link>
            <Link to="/products/production" className="item">
              Production
            </Link>
          </div>
        </div>
        <Link to="/orders" className="item">
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Header;

// <div class="ui fixed inverted menu">
//   <div class="ui container">
//     <a href="/#" class="header item">
//       Labl Dashboard
//     </a>
//     <a href="/#" class="item">Home</a>
//     <a href="/dashboard" class="item">Dashboard</a>
//     <a href="/producers" class="item">Producers</a>
//     <a href="/designers" class="item">Designers</a>
//     <a href="/products" class="item">Products</a>
//     <a href="/orders" class="item">Orders</a>
//   </div>
// </div>

//
// <div className="ui secondary pointing menu">
//   <Link to="/" className="item">
//     Streamy
//   </Link>
//   <div className="right menu">
//     <Link to="/" className="item">
//       All Streams
//     </Link>
//   </div>
// </div>
