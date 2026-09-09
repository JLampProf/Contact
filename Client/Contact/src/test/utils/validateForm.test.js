import { describe, it, expect } from "vitest";
import { validateForm } from "../../utils/validateForm.js";

describe("validateForm", () => {
  it("rejects a missing name", () => {
    expect(validateForm({ email: "john@john.com", number: "123456789" })).toBe(
      "Missing form data",
    );
  });

  it("rejects a missing email", () => {
    expect(validateForm({ name: "John", number: "123456789" })).toBe(
      "Missing form data",
    );
  });

  it("rejects a missing number", () => {
    expect(validateForm({ name: "john", email: "email@email.com" })).toBe(
      "Missing form data",
    );
  });

  it("rejects an empty name", () => {
    expect(
      validateForm({
        name: "",
        email: "email@email.com",
        number: "123456789",
      }),
    ).toBe("Missing form data");
  });

  it("rejects an invalid email", () => {
    expect(
      validateForm({
        name: "john",
        email: "emailgmail.com",
        number: "123456789",
      }),
    ).toBe("Invalid email");
  });

  it("rejects an invalid number", () => {
    expect(
      validateForm({ name: "John", email: "email@email.com", number: "Dave" }),
    ).toBe("Invalid number");
  });

  it("accepts valid form data", () => {
    expect(
      validateForm({
        name: "john",
        email: "email@email.com",
        number: "123456789",
      }),
    ).toBe("");
  });
});
