import React from "react";
import { Table } from "reactstrap";
import TableHeaders from "./TableHeaders";
import TableItem from "./TableItem";
import types from "../../utils/types/types";

const TableWrapper = ({ albums, removeAlbum, toggleIsTheBest }) => {
  return (
    <>
      <h2 className="text-center">Table:</h2>
      <Table responsive bordered>
        <TableHeaders />
        <tbody>
          {albums.map((album) => (
            <TableItem
              key={album.id}
              album={album}
              removeAlbum={removeAlbum}
              toggleIsTheBest={toggleIsTheBest}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};


export default TableWrapper;

TableWrapper.propTypes = types;