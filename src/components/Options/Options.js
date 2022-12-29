import React from "react";
import { Button } from "reactstrap";
import { FormattedMessage } from "react-intl";
import { PropTypes } from "prop-types";

const Options = ({
  isGrid,
  setIsGrid,
  sortByName,
  sortById,
  sortByDate,
  handleSort,
}) => {
  return (
    <div className="d-flex justify-content-center p-2 gap-2">
      <Button type="button" onClick={() => setIsGrid(!isGrid)}>
        {isGrid ? (
          <FormattedMessage id="list" />
        ) : (
          <FormattedMessage id="grid" />
        )}
      </Button>
      <Button type="button" onClick={() => handleSort(sortById)}>
        <FormattedMessage id="sortById" />
      </Button>
      <Button type="button" onClick={() => handleSort(sortByName)}>
        <FormattedMessage id="sortByName" />
      </Button>
      <Button type="button" onClick={() => handleSort(sortByDate)}>
        <FormattedMessage id="sortByDate" />
      </Button>
    </div>
  );
};

export default Options;

Options.propTypes = {
  isGrid: PropTypes.bool,
  setIsGrid: PropTypes.func,
  sortByName: PropTypes.func,
  sortById: PropTypes.func,
  sortByDate: PropTypes.func,
  handleSort: PropTypes.func,
};
