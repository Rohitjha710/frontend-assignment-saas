import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import useFetch from "../hooks/useFetch";

jest.mock("../hooks/useFetch");

describe("App Component", () => {
  test("displays loading spinner while fetching data", () => {
    useFetch.mockReturnValue({ isFetching: true, projects: [], isError: false });
    render(<App />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  test("displays error message on fetch failure", () => {
    useFetch.mockReturnValue({ isFetching: false, projects: [], isError: true });
    render(<App />);
    expect(screen.getByText(/Unable to fetch data/i)).toBeInTheDocument();
  });

  test("renders projects and pagination on fetch success", async () => {
    useFetch.mockReturnValue({
      isFetching: false,
      projects: [{ "s.no": 1, "percentage.funded": "50%", "amt.pledged": "$1000" }],
      isError: false,
    });
    render(<App />);
    expect(await screen.findByText(/Kickstarter Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Percentage funded/i)).toBeInTheDocument();
    expect(screen.getByText(/50%/i)).toBeInTheDocument();
  });
});
