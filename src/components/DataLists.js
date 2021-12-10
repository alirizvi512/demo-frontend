import React from "react";
import PropTypes from "prop-types";
import ListCard from "./ListCard";

const DataLists = props => {
  const { lists, removeData, handleUpdate } = props;
  console.log(lists);
  return (
    <div>
      {lists.map(data => {
        return (
          <ListCard
            key={data.id}
            id={data.id}
            title={data.title}
            body={data.body}
            schedule={data.schedule}
            removeData={removeData}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </div>
  );
};

DataLists.propTypes = {
  removeData: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired
};

export default DataLists;
