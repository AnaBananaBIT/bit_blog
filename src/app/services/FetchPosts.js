import * as shared from '../shared/Posts'
import Post from './../entities/Post'

const url = `${shared.BASE_API_URL}/posts`;

const FetchPosts = () => (
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((apiPosts) => {
            const allPosts = apiPosts.map((apiPost) => (
                new Post(
                    apiPost.userId,
                    apiPost.id,
                    apiPost.title[0].toUpperCase() + apiPost.title.slice(1),
                    apiPost.body[0].toUpperCase() + apiPost.body.slice(1)


                )
            ))

            return allPosts
        })
)




const FetchPost = (postId) => {
    return fetch(url + "/" + postId)
        .then((res) => {
            return res.json()
        })
        .then((posts) => {
            console.log(posts)
            return posts
        })
}

export {
    FetchPosts,
    FetchPost
}