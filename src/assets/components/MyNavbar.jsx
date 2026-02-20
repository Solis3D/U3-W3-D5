import { NavItem, Container, Nav, Navbar, Form, InputGroup } from "react-bootstrap";
import logo from "../logos/appleMusic.svg";

const MyNavbar = function () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary text-danger py-2 d-lg-none">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=" border-0" />
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="d-inline-block align-top mt-1" style={{ height: "20px", width: "auto", filter: "invert(0.9)" }} />
        </Navbar.Brand>
        <NavItem>Accedi</NavItem>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-2">
            <InputGroup className="my-1">
              <InputGroup.Text id="basic-addon1">
                <i className="bi bi-search text-danger"></i>
              </InputGroup.Text>
              <Form.Control placeholder="Cerca" aria-label="Cerca" aria-describedby="basic-addon1" style={{ maxWidth: "rem" }} />
            </InputGroup>
            <Nav.Link href="#home" className=" d-flex align-items-center gap-2">
              <i className="bi bi-house-door text-danger fs-4 me-2"></i> Home
            </Nav.Link>
            <Nav.Link href="#link" className=" d-flex align-items-center gap-2">
              <i className="bi bi-grid text-danger fs-4 me-2"></i> Novità
            </Nav.Link>
            <Nav.Link href="#link" className=" d-flex align-items-center gap-2">
              {" "}
              <i className="bi bi-broadcast text-danger fs-4 me-2"></i> Radio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
