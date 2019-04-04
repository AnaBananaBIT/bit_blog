import React from 'react'
import { Link } from "react-router-dom"

const SingleAuthor = (props) => {
    return (
        <div>
            <div class="row name">
                <div class="col s6"><Link to="/authors"><p>All authors</p></Link></div>
                <div class="col s6"><h4>Single Author</h4></div>

            </div>
            <div class="row">
                <div class="col s6"><img src="http://www.dynamicdrive.com/cssexamples/media/frame2.png"></img></div>
                <div class="col s6"><h6>Name Surname</h6><p>username: my_cool_username</p><p>email: my_cool@email.com</p><p>phone: 1-770-736-8031</p></div>

            </div>
            <div class="row">
                <div class="col s6"><h6>Address</h6><p>street:Bla Bla ST</p><p>city: Gwenborough</p><p>zipcode:77007</p></div>
                < div class="col s6"></ div>
            </div>
            <div class="row">
                <div class="col s12"><h6>Company</h6><p>street:Bla Bla ST</p><p>city: Gwenborough</p><p>zipcode:77007</p></div>

            </div>


        </div >



    )
}

export default SingleAuthor