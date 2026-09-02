import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";
import { describe, it, expect } from "vitest";

describe("Form", () => {
  it("uploads contact data to the DB", () => {
    const mockSubmit = vi.fn();
    render(<Form handleSubmit={vi.fn()} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(mockSubmit).toHaveBeenCalled();
  });

  it("displays a success message", () => {
    render(<Form />);
  });

  it("displays a failure message", () => {
    render(<Form />);
  });
});
