import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, Form, FormGroup, Label, Input, Card, Col } from "reactstrap";

const NewAlbumForm = ({ addAlbum }) => {
  const [album, setAlbum] = useState({
    id: "",
    name: "",
    bestOfTheBest: false,
    createdAt: new Date().toDateString(),
  });

  const handleAlbumInputChange = (e) => {
    setAlbum({ ...album, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (album.name.trim()) {
      addAlbum({ ...album, id: uuid() });
      setAlbum({ ...album, name: "" });
    }
  };

  return (
    <Card className="border-0">
      <Col
      className="border p-2"
      md={{
        offset: 3,
        size: 6
      }}
      sm="12"
    >
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="album">Album</Label>
          <Input
            label="album"
            type="text"
            name="album"
            value={album.name}
            onChange={handleAlbumInputChange}
          />
        </FormGroup>
        <Button color="primary">Add to List</Button>
      </Form>
      </Col>
    </Card>
  );
};

export default NewAlbumForm;
