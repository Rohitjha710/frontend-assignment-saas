import React from 'react'

const Pages = ({ pages, setCurrentPage }) => {
    return (<>
        {pages.map(x =>
            <button key={x} onClick={() => setCurrentPage(x)} style={{ "cursor": "pointer" }}>
                {x}
            </button>)}
    </>)
}

export default Pages