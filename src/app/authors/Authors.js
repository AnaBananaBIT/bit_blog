import React from 'react'
import { Link } from "react-router-dom"
const Author = (props) => {
    return (
        <div class="collection">
            <h4>AUTHORS 6</h4>
            <p><Link to="/singleauthors"> Name Surname </Link> (2-posts)</p>
            <p><Link to="/singleauthors"> Name Surname </Link> (2-posts) </p>
            <p> <Link to="/singleauthors"> Name Surname </Link> (2-posts)</p>
            <p> <Link to="/singleauthors"> Name Surname </Link> (2-posts)</p>
            <p> <Link to="/singleauthors"> Name Surname </Link> (2-posts)</p>
            <p><Link to="/singleauthors"> Name Surname </Link> (2-posts) </p>
        </div>

    )
}

export default Author