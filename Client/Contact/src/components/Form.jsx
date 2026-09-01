/**
 * Component Houses the form, and collects the users data, passing it back up to the Home component
 */

import { useState } from "react";
import { contactUpload } from "../scripts/contactScript.js";

const Form = ({ setCurrent }) => {
  //Holds state for the form
  const [form, setForm] = useState({ name: "", email: "", number: "" });

  //sets form data into state object and refreshes inputs to show blank
  const handleSubmit = async (e) => {
    e.preventDefault();

    //API call
    try {
      const result = await contactUpload(form);

      if (result === "success") {
        //TODO: Success Toast here (Contact created)
        setCurrent({
          name: form.name,
          email: form.email,
          number: form.number,
        });

        setForm({
          name: "",
          email: "",
          number: "",
        });
      } else {
        //TODO: Failure Toast (Contact Failed to create)
      }
    } catch (error) {
      //TODO: Fill in.
    }
  };

  //sets input data into form state object
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="POST" action="">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="number">Contact Number: </label>
        <input
          type="text"
          name="number"
          id="number"
          value={form.number}
          onChange={handleChange}
        />
        <br />
        <button id="myButton" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
