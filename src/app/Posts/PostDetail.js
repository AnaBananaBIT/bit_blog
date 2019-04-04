import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { FetchPost } from './../services/FetchPosts'

class PostDetail extends Component {
    constructor(props) {
        super(props)


        this.state = {
            id: {}
        }
    }


    componentDidMount() {
        FetchPost()

    }








    render() {
        return (
            <div>
                <h4>SINGLE POST TITLE</h4>
                <p><Link to="/singleauthors">Author Name</Link></p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Pharetra pharetra massa massa ultricies mi quis hendrerit. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Feugiat nisl pretium fusce id velit ut tortor pretium. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sed pulvinar proin gravida hendrerit lectus a. Condimentum lacinia quis vel eros donec ac odio tempor. Tempus egestas sed sed risus pretium quam. Mauris commodo quis imperdiet massa tincidunt. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Donec adipiscing tristique risus nec feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Pharetra pharetra massa massa ultricies mi quis hendrerit. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Feugiat nisl pretium fusce id velit ut tortor pretium. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sed pulvinar proin gravida hendrerit lectus a. Condimentum lacinia quis vel eros donec ac odio tempor. Tempus egestas sed sed risus pretium quam. Mauris commodo quis imperdiet massa tincidunt. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Donec adipiscing tristique risus nec feugiat.</p>
                <i className="fal fa-ellipsis-h-alt"></i>
                <h6>3 more posts from same author</h6>
                <Link to="/postdetail"><p>Title 10</p></Link>
                <Link to="/postdetail"><p>Title 11</p></Link>
                <Link to="/postdetail"><p>Title 12</p></Link>


            </div>
        )
    }
}

export default PostDetail