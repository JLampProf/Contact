/**
 * Component Houses the form, and collects the users data, passing it back up to the Home component
 */

import { useState } from "react";
import { contactUpload } from "../scripts/contactScript.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { validateForm } from "../utils/validateForm.js";

const Form = ({ setCurrent }) => {
  //Holds state for the form
  const [form, setForm] = useState({ name: "", email: "", number: "" });

  //sets form data into state object and refreshes inputs to show blank
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validates the form
    const validation = validateForm(form);
    if (validation !== "") {
      toast(validation);
      return;
    }

    //API call
    try {
      const result = await contactUpload(form);

      if (result === "success") {
        toast("New Contact Added!");
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
        throw new Error("Contact failed to Upload.");
      }
    } catch (error) {
      toast("Contact Failed to Add!");
      console.error(error);
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
      <ToastContainer
        position="top-right"
        closeOnClick
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <form
        className="contact-form"
        onSubmit={handleSubmit}
        method="POST"
        name="contactForm"
      >
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="number">Contact Number: </label>
        <input
          type="text"
          name="number"
          placeholder="number"
          id="number"
          value={form.number}
          onChange={handleChange}
        />
        <button className="submit-button" id="myButton" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
