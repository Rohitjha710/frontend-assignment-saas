import React from 'react'

const Projects = ({ projects, currentIndex, limitPerPage }) => {
    return (
        <div className='table-container'>
            <table className='styled-table'>
                <thead><tr>
                    <th>S.No.	</th>
                    <th> Percentage funded</th>
                    <th> Amount pledged</th>
                </tr>
                </thead>
                <tbody>
                    {projects.slice(currentIndex, currentIndex + limitPerPage).map(project =>
                    (<tr key={project["s.no"]} >
                        <td>{project["s.no"]}</td>
                        <td>{project["percentage.funded"]}</td>
                        <td>{project["amt.pledged"]}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Projects