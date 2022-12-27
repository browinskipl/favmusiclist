import React from "react";
import Album from "./GridItem";
import { Row, Col } from "reactstrap";

const GridWrapper = ({ albums, removeAlbum, toggleIsTheBest }) => {
  return (
    <Row>
      <h2 className="text-center">List:</h2>
      {albums.map((album) => (
        <Col className="p-2" sm="6">
          <Album
            key={album.id}
            album={album}
            removeAlbum={removeAlbum}
            toggleIsTheBest={toggleIsTheBest}
          />
        </Col>
      ))}
    </Row>
  );
};

export default GridWrapper;
