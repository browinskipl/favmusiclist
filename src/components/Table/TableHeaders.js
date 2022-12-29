import React from "react";
import { FormattedMessage } from "react-intl";

const TableHeaders = () => {
  return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Album</th>
          <th><FormattedMessage id="createdAt"/></th>
          <th><FormattedMessage id="bestOfTheBest"/></th>
          <th><FormattedMessage id="remove"/></th>
        </tr>
      </thead>
  );
};

export default TableHeaders;
