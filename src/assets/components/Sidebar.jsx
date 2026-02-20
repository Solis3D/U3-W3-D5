import logo from "../logos/appleMusic.svg";
import { NavItem, Container, Nav, Navbar, Form, InputGroup } from "react-bootstrap";

const Sidebar = function () {
  return (
    <div className="px-3 border-end vh-100 d-none d-lg-block">
      <div className=" mt-2">
        <img src={logo} alt="Logo" className="d-inline-block align-top mt-1" style={{ height: "30px", width: "auto", filter: "invert(0.9)" }} />
      </div>
      <div className=" my-4">
        <InputGroup className="my-1">
          <InputGroup.Text id="basic-addon1">
            <i className="bi bi-search text-danger"></i>
          </InputGroup.Text>
          <Form.Control placeholder="Cerca" aria-label="Cerca" aria-describedby="basic-addon1" style={{ maxWidth: "rem" }} />
        </InputGroup>
      </div>
      <div className="ms-2 mt-4 d-flex flex-column gap-2">
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
      </div>
    </div>
  );
};

export default Sidebar;
