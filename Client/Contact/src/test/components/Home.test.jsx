import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Home from "../../views/Home";
import { contactDownload } from "../../scripts/contactScript.js";

//Mock the contactScript functions
vi.mock("../../scripts/contactScript.js");

//Fake Data
const fakeData = [
  { name: "Steve", email: "email1", number: "12345" },
  { name: "Carol", email: "email2", number: "1234456" },
];

describe("Home", () => {
  it("imports existing data from the API", async () => {
    contactDownload.mockResolvedValue(fakeData);
    render(<Home />);

    expect(
      await screen.findByText("Steve", { exact: false }),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("Carol", { exact: false }),
    ).toBeInTheDocument();
  });
});
