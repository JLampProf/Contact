import { useState } from "react";

const Form = ({ setCurrent }) => {
  const [form, setForm] = useState({ name: "", email: "", number: "" });

  //sets form data into state object and refreshes inputs to show blank
  const submit = (e) => {
    e.preventDefault();

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
      <form onSubmit={submit} method="POST" action="">
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
