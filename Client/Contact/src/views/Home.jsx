/**
 * Component Holds the input form and the list of existing data
 */

import Form from "../components/Form.jsx";
import List from "../components/List.jsx";
import { useState, useEffect } from "react";

const Main = () => {
  //Holds state for current entered data
  const [current, setCurrent] = useState(null);
  //Holds state for frontend data list, without needing to pull from the database after each entry
  const [list, setList] = useState([]);

  //Sets up the list after each addition is made to it
  useEffect(() => {
    if (current) {
      setList((prevList) => [...prevList, current]);
    }
  }, [current]);

  return (
    <>
      <h1>Contacts</h1>
      <Form setCurrent={setCurrent} />
      <List list={list} />
    </>
  );
};

export default Main;
