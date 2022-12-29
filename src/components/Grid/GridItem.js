import React from "react";
import { Button, Card, CardBody } from "reactstrap";

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
        <div className="text-center">
          Album name: {album.name} {album.bestOfTheBest === true && ('Best of the best')}
        </div>
        <div className="text-center">
          Created at: {album.createdAt}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button color="warning" onClick={handleCheckboxClick}>
            Set as best of the best
          </Button>

          <Button color="danger" onClick={handleRemoveClick}>
            Remove
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default GridItem;
