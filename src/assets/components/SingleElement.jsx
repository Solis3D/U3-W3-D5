import { Col, Image } from "react-bootstrap";

const SingleElement = function (props) {
  return (
    <div>
      <Image fluid src={props.image} rounded></Image>
      <div className="mt-1">
        <p className="mb-0 d-inline-block" style={{ fontSize: "0.8rem" }}>
          {props.title}
        </p>
        {props.explicit && <i className="bi bi-explicit-fill" style={{ fontSize: "0.7rem" }}></i>}
      </div>
    </div>
  );
};

export default SingleElement;
