/**
 * Component Provides the list render logic
 */

const List = ({ list }) => {
  return (
    <>
      {/* If current list is empty show a heading, otherwise render an ordered list of the items in the list */}
      {list.length === 0 ? (
        <h1>Nothing to see here</h1>
      ) : (
        <ol>
          {list.map((item) => {
            return (
              <li>
                name: {item.name} email: {item.email} number: {item.number}
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
};

export default List;
