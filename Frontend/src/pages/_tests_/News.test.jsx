import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import News from "../home/News";
import { describe, it, expect, vi } from "vitest";

vi.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiperslide">{children}</div>
  ),
}));

vi.mock("swiper/modules", () => ({
  Pagination: {},
  Navigation: {},
}));

describe("News Component", () => {
  it("renders news slides", () => {
    render(
      <MemoryRouter>
        <News />
      </MemoryRouter>,
    );

    expect(screen.getByText(/news/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("swiperslide").length).toBeGreaterThan(0);
  });
});
