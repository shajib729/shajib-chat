import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h1>404! Not found page...</h1>
            <Link to="/">Back To Home</Link>
        </div>
    )
}

export default Error
