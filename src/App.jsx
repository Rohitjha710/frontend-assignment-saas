import { useState, useEffect } from "react";
import './App.css';
import useFetch from "./hooks/useFetch";
import { getTotalPages } from "./utils/getTotalPages";
import { getCurrentIndex } from "./utils/getCurrentIndex";

import Projects from "./components/Projects/Projects";
import Pages from "./components/Pages/Pages";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
function App() {
  const { isFetching, projects, isError } = useFetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json');
  const limitPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const currentIndex = getCurrentIndex(currentPage, limitPerPage);
  const pages = getTotalPages(projects, limitPerPage);

  return (
    <div className="container">
      <header>
        <h1> Kickstarter Projects</h1>
      </header>
      {isFetching ? (<Loading/>) : (
        isError ? (<Error message="Unable to fetch data. Please try again."/>) : (<>
          <Projects projects={projects} currentIndex={currentIndex} limitPerPage={limitPerPage} />
          <Pages pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>)
      )}

    </div>
  );
}

export default App;
