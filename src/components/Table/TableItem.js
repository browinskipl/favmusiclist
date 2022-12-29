import React from "react";
import { Button } from "reactstrap";
import types from "../../utils/types/types";

const TableItem = ({ album, toggleIsTheBest, removeAlbum }) => {
  const handleCheckboxClick = () => {
    toggleIsTheBest(album.id);
  };

  const handleRemoveClick = () => {
    removeAlbum(album.id);
  };
  return (
    <tr>
      <th scope="row">{album.id}</th>
      <td>{album.name} {album.bestOfTheBest === true && ('Best of the best')}</td>
      <td>{album.createdAt}</td>
      <td>
        <Button color="warning" onClick={handleCheckboxClick}>
          Set as best of the best
        </Button>
      </td>
      <td>
        <Button color="danger" onClick={handleRemoveClick}>
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default TableItem;

TableItem.propTypes = types;