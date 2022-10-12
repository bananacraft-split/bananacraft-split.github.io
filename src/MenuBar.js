import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import MenuItem from './MenuItem';

function MenuBar() {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <MenuItem name="GamerJ57 Mod" url="/#/mod/gamerj" />
            <MenuItem name="Arrowverse Mod" url="/#/mod/arrow" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;