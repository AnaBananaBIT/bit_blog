import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './app/about/About'
import Authors from './app/authors/Authors'
import Home from './app/Posts/Home'
import SingleAuthor from './app/authors/SingleAuthor';
import PostDetail from './app/Posts/PostDetail';


const Main = () => {
    return (
        <Switch>
            <Route path='/authors' component={Authors} />
            <Route path='/about' component={About} />
            <Route path='/singleauthor/:authorId' component={SingleAuthor} />
            <Route path='/postdetail/:postId' component={PostDetail} />
            <Route path='/' component={Home} />
        </Switch>


    )
}
export default Main