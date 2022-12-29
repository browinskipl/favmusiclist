import React from "react";
import { Row, Col } from "reactstrap";
import GridItem from "./GridItem";
import types from "../../utils/types/types";

const GridWrapper = ({ albums, removeAlbum, toggleIsTheBest }) => {
  return (
    <Row className="m-2">
      <h2 className="text-center">List:</h2>
      {albums.map((album) => (
        <Col className="p-2" sm="6">
          <GridItem
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

GridWrapper.propTypes = types;