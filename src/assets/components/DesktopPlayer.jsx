import { Row, Col, Button } from "react-bootstrap";
import logoApple from "../logos/apple.svg";

const DesktopPlayer = function () {
  return (
    <Row className=" bg-body-tertiary d-none d-lg-flex">
      <Col xs="4" className=" d-flex align-items-center gap-3 text-muted justify-content-center align-items-lg-center">
        <i className="bi bi-shuffle fs-4"></i>
        <i className="bi bi-rewind-fill fs-2"></i>
        <i className="bi bi-play-fill display-5"></i>
        <i className="bi bi-fast-forward-fill fs-2"></i>
        <i className="bi-arrow-repeat fs-3"></i>
      </Col>
      <Col xs="4" className=" d-flex align-items-center justify-content-center bg-secondary my-auto py-2">
        <img src={logoApple} alt="Apple Logo" />
      </Col>
      <Col xs="2" className=" d-flex align-items-center justify-content-center text-center">
        <div className="">
          <i className="bi bi-volume-down-fill text-muted fs-2"></i>
          <input
            type="range"
            className="form-range w-75"
            style={{
              "--bs-form-range-thumb-bg": "white",
            }}
          />
        </div>
      </Col>
      <Col xs="2" className="my-3 text-center">
        <Button variant="danger">
          <i className="bi bi-person-fill"></i> Accedi
        </Button>
      </Col>
    </Row>
  );
};

export default DesktopPlayer;
