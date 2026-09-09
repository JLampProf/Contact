import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import Form from "../../components/Form";
import { contactUpload } from "../../scripts/contactScript.js";

vi.mock("../../scripts/contactScript.js");

describe("Form", () => {
  it("displays a form", () => {
    render(<Form />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

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
