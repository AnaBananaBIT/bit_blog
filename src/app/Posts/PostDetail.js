import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { FetchPost } from './../services/FetchPosts'

class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }


    componentDidMount() {
        const postId = this.props.match.params.postId
        FetchPost(postId)
            .then((post) => {
                this.setState({
                    post
                })
            })

    }




    render() {
        return (
            <div>
                <h4>{this.state.post.title}</h4>
                <p><Link to="/singleauthors">Author Name</Link></p>
                <p >{this.state.post.body}</p>
                <i className="fal fa-ellipsis-h-alt"></i>
                <h6>3 more posts from same author</h6>
                <Link to="/postdetail/:postId"><p>Title 10</p></Link>
                <Link to="/postdetail/:postId"><p>Title 11</p></Link>
                <Link to="/postdetail/:postId"><p>Title 12</p></Link>


            </div>
        )
    }
}

export default PostDetail