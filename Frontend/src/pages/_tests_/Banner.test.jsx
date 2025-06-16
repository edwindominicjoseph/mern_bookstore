import { render, screen } from "@testing-library/react";
import Banner from "../home/banner";
import { describe, it, expect } from "vitest";

describe("Banner Component", () => {
  it("renders heading", () => {
    render(<Banner />);
    expect(
      screen.getByRole("heading", { name: /new releases/i }),
    ).toBeInTheDocument();
  });
});
