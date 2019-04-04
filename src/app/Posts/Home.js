import React from 'react'
import { Link } from "react-router-dom"

const Home = (props) => {
    return (
        <div class="collection">
            <h4>POSTS</h4>
            <h5><Link to="/postdetail">Title 1</Link></h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <h5><Link to="/postdetail">Title 2</Link></h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <h5><Link to="/postdetail">Title 3</Link></h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <h5><Link to="/postdetail">Title 4</Link></h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <h5><Link to="/postdetail">Title 5</Link></h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <h5><Link to="/postdetail">Title 6</Link></h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

        </div>

    )
}

export default Home