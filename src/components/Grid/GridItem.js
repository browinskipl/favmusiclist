import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import types from "../../utils/types/types";
import { FormattedMessage } from "react-intl";

const GridItem = ({ album, toggleIsTheBest, removeAlbum }) => {
  const handleCheckboxClick = () => {
    toggleIsTheBest(album.id);
  };

  const handleRemoveClick = () => {
    removeAlbum(album.id);
  };

  return (
    <Card
      className="text-center"
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <CardBody>
        <div className="text-center">ID: {album.id}</div>
        <div className="text-center">
          <FormattedMessage id="albumName" />: {album.name}{" "}
          {album.bestOfTheBest === true && <FormattedMessage id="bestOfTheBest" />}
        </div>
        <div className="text-center"><FormattedMessage id="createdAt" />: {album.createdAt}</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button color="warning" onClick={handleCheckboxClick}>
            <FormattedMessage id="setAsBestOfTheBest" />
          </Button>

          <Button color="danger" onClick={handleRemoveClick}>
            <FormattedMessage id="remove" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default GridItem;

GridItem.propTypes = types;
