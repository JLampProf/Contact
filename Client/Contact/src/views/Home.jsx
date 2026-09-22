/**
 * Component Holds the input form and the dataList of existing data
 */

import Form from "../components/Form.jsx";
import List from "../components/List.jsx";
import { useState, useEffect } from "react";
import { contactDownload } from "../scripts/contactScript.js";

const Home = () => {
  //Holds state for current entered data
  const [newFormData, setNewFormData] = useState(null);
  //Holds state for frontend data dataList, without needing to pull from the database after each entry
  const [dataList, setDataList] = useState([]);
  //Holds state if the contact Data is being downloaded or not
  const [downloading, setDownloading] = useState(false);

  //Pulls data from DB on first render
  useEffect(() => {
    const downloadList = async () => {
      setDownloading(true);

      try {
        const listData = await contactDownload();

        //Only update current state if listData is not empty
        if (listData) {
          setDataList(listData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setDownloading(false);
      }
    };
    downloadList();
  }, []);

  //Sets up the dataList after each addition is made to it without touching the DB
  useEffect(() => {
    if (newFormData) {
      setDataList((prevList) => [...prevList, newFormData]);
    }
  }, [newFormData]);

  return (
    <>
      <div className="container">
        <h1>Contacts</h1>
        <Form setNewFormData={setNewFormData} />
        <hr />
        {downloading ? <h1>Downloading...</h1> : <List dataList={dataList} />}
      </div>
    </>
  );
};

export default Home;
