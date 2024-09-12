import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Form, FormControl, Button} from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';


const MyNavbar = () => {
  return (
    <>
      {/* Navbar Component */}
      <Navbar bg="dark" expand="lg" variant="dark">
        {/* Corrected variant usage for dark theme */}
        <Container>
          <Navbar.Brand href="#home" className="Brand text-white">
            Shop Easy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex justify-content-center fw-bold">
              <Nav.Link href="#home" className="Brand text-white">
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
              <Nav.Link href="#login" className="log text-white">
                Login
              </Nav.Link>
              <Nav.Link href="#sign-up" className="sign text-white">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Bar Component */}
      <Container className="my-4">
        <Form className="d-flex form-control rounded-5 ps-2">
          <FormControl type="search" placeholder="Search for products" className="my-0 border-0 rounded-5" aria-label="Search"/>
          <Button variant="outline-light">
            <FontAwesomeIcon icon={faSearch}/>
          </Button>
        </Form>
      </Container>

    </>
  );
}

  export default MyNavbar;
