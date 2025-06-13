import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../redux/features/cart/cartSlice";
import Topsellers from "../home/Topsellers";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";
import { vi, describe, it, afterEach, expect } from "vitest";

// ✅ Correct mock path
vi.mock("../../redux/features/books/booksApi", () => ({
  useFetchAllBooksQuery: vi.fn(),
}));

// ✅ Fake BookCard to prevent Redux usage inside it (optional)
vi.mock("../books/bookcard", () => ({
  default: ({ book }) => <div>{book.title}</div>,
}));

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

describe("Topsellers Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("filters books by category", () => {
    const sampleBooks = [
      { _id: "1", title: "Book 1", category: "Business" },
      { _id: "2", title: "Book 2", category: "Fiction" },
    ];

    // ✅ Mock API data
    useFetchAllBooksQuery.mockReturnValue({ data: { books: sampleBooks } });

    // ✅ Setup minimal Redux store for cart
    const mockStore = configureStore({
      reducer: { cart: cartReducer },
      preloadedState: { cart: { cartItems: [] } },
    });

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Topsellers />
        </MemoryRouter>
      </Provider>,
    );

    // Simulate selecting "Fiction"
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Fiction" },
    });

    expect(screen.getAllByTestId("swiperslide")).toHaveLength(1);
    expect(screen.getByText("Book 2")).toBeInTheDocument();
  });
});
