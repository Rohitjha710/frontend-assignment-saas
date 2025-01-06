import React, {useEffect, useRef} from "react";

const Pages = ({ pages, setCurrentPage,currentPage}) => {
        const btnRef = useRef(null);
        useEffect(() => {
            if (btnRef.current) {
              btnRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center", 
              });
            }
          }, [currentPage]);
  return (
    <footer className="footer-pagination">
      <button 
        className="nav-button" 
        disabled={currentPage==1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        aria-label="Previous Page"
      >
        ◀
      </button>
      <div className="scrollable-footer">
        {pages.map((page) => (
          <button
            key={page}
            ref={page==currentPage?btnRef:null}
            className={`page-button ${currentPage==page?'active':''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button 
        className="nav-button" 
        disabled={currentPage==pages.length}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        aria-label="Next Page"
      >
        ▶
      </button>
    </footer>
  );
};

export default Pages;
