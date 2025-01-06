import React from 'react'

const Error = ({message}) => {
    return (
        <div className="error-message">
          {message || "Something went wrong!"}
        </div>
  )
}

export default Error