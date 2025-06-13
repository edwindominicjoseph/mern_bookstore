import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { describe, it, expect } from "vitest";

describe("Footer Component", () => {
  it("renders subscribe button", () => {
    render(<Footer />);
    expect(
      screen.getByRole("button", { name: /subscribe/i }),
    ).toBeInTheDocument();
  });
});
