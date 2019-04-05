import *as shared from './../shared/Posts'
import Author from './../entities/Author'

const urlAuthors = `${shared.BASE_API_URL}/users`


const FetchAuthors = () => (
    fetch(urlAuthors)
        .then((res) => {
            return res.json()
        })
        .then((authorsApi) => {

            const authorsAll = authorsApi.map((author) => (
                new Author(
                    author.id,
                    author.name,
                    author.username,
                    author.email,
                    author.address.street,
                    author.address.city,
                    author.address.zipcode,
                    author.phone,
                    author.website,
                    author.company.name,
                    author.company.city,
                    author.company.zipcode


                )
            ))

            return authorsAll
        })
)



const FetchSingleAuthor = (authorId) => (
    fetch(urlAuthors + "/" + authorId)
        .then((res) => {
            return res.json()
        })
        .then((author) => {
            console.log(author);
            return author

        })
)









export {
    FetchAuthors,
    FetchSingleAuthor
}