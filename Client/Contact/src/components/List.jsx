const List = ({ list }) => {
  return (
    <>
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
