import * as shared from '../shared/ApiAddress'
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
            console.log(allPosts)
            return allPosts
        })
)




const FetchPost = () => {
    fetch(url)
        .then((res) => {
            console.log(res)
            return res.json()
        }

        )
}

export {
    FetchPosts,
    FetchPost
}