import Form from "../components/Form.jsx";
import List from "../components/List.jsx";
import { useState, useEffect } from "react";

const Main = () => {
  const [current, setCurrent] = useState(null);
  const [list, setList] = useState([]);

  console.log(1);

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
