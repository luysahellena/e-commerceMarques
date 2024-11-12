// src/components/NavBar.jsx
import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

const NavBar = () => {
  const { cart } = useCart(); // Acessar o cart do contexto

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Louys Beer's & Cheers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/catalog">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre Nós</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              <FaShoppingCart size={20} />
              {totalItems > 0 && (
                <Badge bg="success" className="ms-2">
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
