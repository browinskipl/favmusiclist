import React from "react";
import { Button } from "reactstrap";
import types from "../../utils/types/types";
import { FormattedMessage } from "react-intl";

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
      <td>{album.name} {album.bestOfTheBest === true && (<FormattedMessage id="bestOfTheBest" />)}</td>
      <td>{album.createdAt}</td>
      <td>
        <Button color="warning" onClick={handleCheckboxClick}>
          <FormattedMessage id="setAsBestOfTheBest" />
        </Button>
      </td>
      <td>
        <Button color="danger" onClick={handleRemoveClick}>
          <FormattedMessage id="remove" />
        </Button>
      </td>
    </tr>
  );
};

export default TableItem;

TableItem.propTypes = types;