import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { FetchPosts } from '../services/FetchPosts'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        FetchPosts()
            .then((allPosts) => {
                this.setState({
                    posts: allPosts,

                })
            })
    }

    render() {
        const { posts } = this.state
        return (

            < div className="collection" >
                <h4>POSTS</h4>

                {posts.slice(0, 7).map(post => (
                    <div>
                        <h5><Link to={`/postdetail/${post.id}`}>{post.id} {post.title} </Link></h5>
                        <p>{post.body}</p>

                    </div>
                ))}
            </div >)
    }
}

export default Home