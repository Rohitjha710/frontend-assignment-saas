import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects/Projects";

describe("Projects Component", () => {
  const projects = [
    { "s.no": 1, "percentage.funded": "50%", "amt.pledged": "$1000" },
    { "s.no": 2, "percentage.funded": "75%", "amt.pledged": "$2000" },
  ];

  test("renders project table with correct headers", () => {
    render(<Projects projects={projects} currentIndex={0} limitPerPage={2} />);
    expect(screen.getByText("S.No.")).toBeInTheDocument();
    expect(screen.getByText("Percentage funded")).toBeInTheDocument();
    expect(screen.getByText("Amount pledged")).toBeInTheDocument();
  });

  test("displays project data in the table", () => {
    render(<Projects projects={projects} currentIndex={0} limitPerPage={2} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("75%")).toBeInTheDocument();
    expect(screen.getByText("$2000")).toBeInTheDocument();
  });

  test("limits project display based on currentIndex and limitPerPage", () => {
    render(<Projects projects={projects} currentIndex={1} limitPerPage={1} />);
    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
