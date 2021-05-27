import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div>
            <h2>Oops nothing to show here.</h2>
            <Link to="/">Go Back to Home</Link>
        </div>
    )
}

export default Error404
