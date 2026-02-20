import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongsAction } from "../redux/actions/actions";
import { Col, Row, Spinner } from "react-bootstrap";
import SingleElement from "./SingleElement";

const NewReleases = function () {
  const dispatch = useDispatch();

  const songs = useSelector((currentState) => currentState.songs.songs);
  const isLoading = useSelector((currentState) => currentState.songs.isLoading);
  const error = useSelector((currentState) => currentState.songs.error);

  useEffect(() => {
    dispatch(getSongsAction("Rock"));
  }, [dispatch]);

  return (
    <div className=" mt-5">
      <h6 className="m-0">
        Nuove uscite <i class="bi bi-chevron-right"></i>
      </h6>

      <Row xs={3} lg={5} className="mt-2 flex-nowrap overflow-x-auto flex-lg-wrap g-2">
        {error && <Alert variant="danger">Errore nel recupero dati!</Alert>}

        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Col key={index}>
                <Spinner animation="grow" />
              </Col>
            ))
          : songs.map((song) => (
              <Col key={song.id}>
                <SingleElement image={song.album.cover_big} title={song.title} explicit={song.explicit_lyrics} />{" "}
              </Col>
            ))}
      </Row>
    </div>
  );
};

export default NewReleases;
