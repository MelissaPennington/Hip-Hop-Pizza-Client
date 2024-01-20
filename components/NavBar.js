/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <img src="/pen pizza.webp" width="auto%" height="100" alt="icon" className="nav-logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/orders">
              <Nav.Link>View Orders</Nav.Link>
            </Link>
            <Link passHref href="/orders/new">
              <Nav.Link>Create Order</Nav.Link>
            </Link>
            <Link passHref href="/revenue/revenue">
              <Nav.Link>View Revenue</Nav.Link>
            </Link>
          </Nav>
          <div className="signoutBtn d-flex align-items-center">
            <Button variant="danger" onClick={signOut} style={{ fontSize: 12 }} className="me-2">
              <b><em>Sign Out &#9916;</em></b>
            </Button>
            <Link passHref href="/cart">
              <Button className="cart-btn">
                <div className="cart-icon">
                  <img src="/cart.png" width="auto%" height="50" alt="icon" className="nav-logo" />
                </div>
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
