import { Nav,Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Logo from './Logo'
export default function MyNavbar()
{
    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
    <Navbar.Brand href="">
    <Link to="/home">{' '}Free OCR</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <Nav.Link href="#deets"></Nav.Link>
        <Nav.Link >
        <Link to="/">About</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}