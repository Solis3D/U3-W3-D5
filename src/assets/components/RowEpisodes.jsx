import { Row } from "react-bootstrap";
import image2a from "../images/2a.png";
import image2b from "../images/2b.png";
import image2c from "../images/2c.png";
import image2d from "../images/2d.png";
import image2e from "../images/2e.png";
import SingleElement from "./SingleElement";

const RowEpisodes = function () {
  return (
    <div className="mt-5">
      <h6 className="m-0">
        Nuovi episodi radio <i class="bi bi-chevron-right"></i>
      </h6>
      <Row xs={3} lg={5} className="mt-2 flex-nowrap overflow-x-auto flex-lg-wrap g-2">
        <SingleElement image={image2a} title="Prologo con Abuelo" explicit={true} />
        <SingleElement image={image2b} title="The Wanderer" />
        <SingleElement image={image2c} title="Michael Bublé & Carly Pearce" />
        <SingleElement image={image2d} title="Stephan Moccio: The Zane Lowe Interview" />
        <SingleElement image={image2e} title="Chart Spotlight: Julia Michaels" />
      </Row>
    </div>
  );
};

export default RowEpisodes;
