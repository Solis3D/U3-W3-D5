import { Col, Row } from "react-bootstrap";
import ExploreContent from "./ExploreContent";

const Explore = function () {
  return (
    <div className="mt-5">
      <h3>Altro da esplorare</h3>

      <Row xs={1} md={2} lg={3} className=" g-lg-3">
        <Col className="p-2">
          <ExploreContent text="Esplora per genere" />
        </Col>
        <Col className=" p-2">
          <ExploreContent text="Decenni" />
        </Col>
        <Col className=" p-2">
          <ExploreContent text="Attività e stati d'animo" />
        </Col>
        <Col className=" p-2">
          <ExploreContent text="Worldwide" />
        </Col>
        <Col className=" p-2">
          <ExploreContent text="Classifiche" />
        </Col>
        <Col className=" p-2">
          <ExploreContent text="Audio Spaziale" />
        </Col>
        <Col className=" p-2">
          <ExploreContent text="Video musicali" />
        </Col>
        <Col className=" p-2">
          <ExploreContent text="Nuovi artisti" />
        </Col>
        <Col className=" p-2">
          <ExploreContent text="Hit del passato" />
        </Col>
      </Row>
    </div>
  );
};

export default Explore;
