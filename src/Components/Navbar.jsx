import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';


const MyNavbar = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        {/* Corrected variant usage for dark theme */}
        <Container>
          <Navbar.Brand href="#home" className="Brand text-white">
            Shop Easy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex justify-content-center fw-bold">
              <Nav.Link as = {Link} to = "/" className="Brand text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#about-us" className="Brand text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="#contact-us" className="Brand text-white">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav className="d-flex justify-content-end">
              <Nav.Link href="#cart" className="cart text-white">
                <FaShoppingCart size={20} /> {/* Cart icon */}
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="log text-white">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/Signin" className="log text-white">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      

    </>
  );
}

  export default MyNavbar;
