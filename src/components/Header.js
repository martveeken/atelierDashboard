import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/dashboard" eventKey="link-1">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/home" eventKey="link-2">Producers</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/home" eventKey="link-3">Designers</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/home" eventKey="link-4">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/home" eventKey="link-5">Orders</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
