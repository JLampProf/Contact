import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import Form from "../../components/Form";
import { contactUpload } from "../../scripts/contactScript.js";

//Mocking the contactUpload method import
vi.mock("../../scripts/contactScript.js");

describe("Form", () => {
  //Test for if the form displays
  it("displays a form", () => {
    render(<Form />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  //Test if the toast will be succesful, if the API call is successful
  it("displays a success toast after successful API call", async () => {
    const user = userEvent.setup();

    contactUpload.mockResolvedValue("success");

    render(<Form />);

    const submitButton = screen.getByRole("button");

    await user.type(screen.getByPlaceholderText("name"), "John");

    await user.type(screen.getByPlaceholderText("email"), "email@email.com");

    await user.type(screen.getByPlaceholderText("number"), "123456789");

    await user.click(submitButton);

    expect(screen.getByText("New Contact Added!")).toBeInTheDocument();
  });

  //Test if the toast will show failure, if the API call fails
  it("displays a failure toast after failed API call", async () => {
    const user = userEvent.setup();

    contactUpload.mockResolvedValue("");

    render(<Form />);

    const submitButton = screen.getByRole("button");

    await user.type(screen.getByPlaceholderText("name"), "John");

    await user.type(screen.getByPlaceholderText("email"), "email@email.com");

    await user.type(screen.getByPlaceholderText("number"), "123456789");

    await user.click(submitButton);

    expect(screen.getByText("Contact Failed to Add!")).toBeInTheDocument();
  });
});
