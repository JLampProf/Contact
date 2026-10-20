/**
 * Component Provides the list render logic
 */

import React from "react";

const List = ({ dataList }) => {
  return (
    <>
      {/* If current list is empty show a heading, otherwise render an ordered list of the items in the list */}
      {dataList.length === 0 ? (
        <h1>Nothing to see here</h1>
      ) : (
        <div className="dataGrid">
          <h2 className="dataGrid-header">Name</h2>
          <h2 className="dataGrid-header">Email</h2>
          <h2 className="dataGrid-header">Contact Number</h2>
          {dataList.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <li className="dataItem">{item.name}</li>
                <li className="dataItem">{item.email}</li>
                <li className="dataItem">{item.number}</li>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </>
  );
};

export default List;
