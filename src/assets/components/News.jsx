import { Col, Row, Image } from "react-bootstrap";
import image1a from "../images/1a.png";
import image1b from "../images/1b.png";

const News = function () {
  return (
    <div className=" mt-5">
      <h1>Novità</h1>

      <Row className="mt-3 flex-nowrap overflow-x-auto pb-2">
        <Col xs="10" lg="6" className=" d-flex flex-column">
          <h6 className=" text-secondary">NUOVA STAZIONE RADIO</h6>
          <h5 className=" text-muted mb-3">
            Rilassati, al resto pensiamo noi. <br /> Ascolta Apple Music Chill
          </h5>
          <Image fluid src={image1a} rounded className="mt-auto"></Image>
        </Col>
        <Col xs="10" lg="6" className=" d-flex flex-column">
          <h6 className=" text-secondary">NUOVA STAZIONE RADIO</h6>
          <h5 className=" text-muted mb-3">Ecco la nuova casa della musica latina</h5>
          <Image fluid src={image1b} rounded className="mt-auto"></Image>
        </Col>
      </Row>
    </div>
  );
};

export default News;
