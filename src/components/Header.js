import React from 'react'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import SocialFollow from './SocialFollow'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#profile">Portfolio</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#profile">Profile</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <SocialFollow></SocialFollow>
        </Navbar.Text>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
