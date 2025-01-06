import React, { useEffect, useRef } from "react";

const Pages = ({ pages, setCurrentPage, currentPage }) => {
    const btnRef = useRef(null);
    useEffect(() => {
        if (btnRef.current && typeof btnRef.current.scrollIntoView === "function") {
            btnRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
            btnRef.current.focus();
        }
    }, [currentPage]);

    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {

            if (currentPage > 1) {
                setCurrentPage((prev) => prev - 1);
            }
        } else if (event.key === "ArrowRight") {

            if (currentPage < pages.length) {
                setCurrentPage((prev) => prev + 1);
            }
        }
    };
    return (
        <footer className="footer-pagination" onKeyDown={handleKeyDown} tabIndex="0">
            <button
                className="nav-button"
                disabled={currentPage == 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                aria-label="Previous Page"
            >
                ◀
            </button>
            <div className="scrollable-footer">
                {pages.map((page) => (
                    <button
                        key={page}
                        ref={page == currentPage ? btnRef : null}
                        className={`page-button ${currentPage == page ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button
                className="nav-button"
                disabled={currentPage == pages.length}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                aria-label="Next Page"
            >
                ▶
            </button>
        </footer>
    );
};

export default Pages;
