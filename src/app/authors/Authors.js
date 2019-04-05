import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { FetchAuthors } from './../services/FetchAuthors'

class Author extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorsList: []
        }
    }


    componentDidMount() {
        FetchAuthors()
            .then((authorsAll) => {
                this.setState({
                    authorsList: authorsAll


                })

            })
    }


    render() {
        const { authorsList } = this.state
        return (
            <div className="collection">
                <h4>AUTHORS</h4>
                {authorsList.slice(0, 10).map(author => (
                    <p><Link to={`/singleauthor/${author.id}`}> {author.name} </Link> </p>


                ))}
            </div>)
    }
}

export default Author