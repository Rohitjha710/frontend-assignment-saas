import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { getTotalPages } from "./utils/getTotalPages";
import { getCurrentIndex } from "./utils/getCurrentIndex";

import Projects from "./components/Projects/Projects";
import Pages from "./components/Pages/Pages";
function App() {
  const { isFetching, projects, isError } = useFetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json');
  const limitPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const currentIndex = getCurrentIndex(currentPage, limitPerPage);
  const pages = getTotalPages(projects, limitPerPage);

  return (
    <>
      <h1> Kickstarter Projects</h1>
      {isFetching ? (<div>...Fetching</div>) : (
        isError ? (<div>...Error occured</div>) : (<>
          <Projects projects={projects} currentIndex={currentIndex} limitPerPage={limitPerPage} />
          <Pages pages={pages} setCurrentPage={setCurrentPage} />
        </>)

      )}

    </>
  );
}

export default App;
