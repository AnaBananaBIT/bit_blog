import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { FetchSingleAuthor } from './../services/FetchAuthors'

class SingleAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
    }
    componentDidMount() {
        const authorId = this.props.match.params.authorId
        FetchSingleAuthor(authorId)
            .then((author) => {
                this.setState({
                    author
                })
            })

    }

    render() {
        const { author } = this.state;
        if (!author) {
            return null
        }

        return (
            <div>
                <div className="row name">
                    <div className="col s6"><Link to="/authors"><p>All authors</p></Link></div>
                    <div className="col s6"><h4>{this.state.author.name}</h4></div>

                </div>
                <div className="row">
                    <div className="col s6"><img src="http://www.dynamicdrive.com/cssexamples/media/frame2.png"></img></div>
                    <div className="col s6"><h6>{this.state.author.name}</h6><p>Username: {this.state.author.username}</p><p>Email: {this.state.author.email}</p><p>Phone: {this.state.author.phone}</p></div>

                </div>
                <div className="row">
                    <div className="col s6"><h6>Address</h6><p>Street: {this.state.author.address.street}</p><p>City:  {this.state.author.address.city}</p><p>ZipCode: {this.state.author.address.zipcode}</p></div>
                    < div className="col s6"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11322.276616522473!2d20.45802175!3d44.80996845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1554464503164!5m2!1ssr!2srs" width="300" height="180" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe></ div>
                </div>
                <div className="row">
                    <div className="col s12"><h6>Company</h6><p>Street: {this.state.author.company.name}</p><p>Catch phrase: {this.state.author.company.catchPhrase}</p><p>Zipcode: 77700089</p></div>

                </div>


            </div >



        )
    }
}

export default SingleAuthor