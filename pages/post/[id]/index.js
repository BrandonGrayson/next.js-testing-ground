
import Header from "../../components/header"

const Post = (title, body) => (
        <>
            <Header />
            <h1>{title}</h1>
            <p>{body}</p>
        </>
    )


Post.getInitialProps = async ({ props }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const post = res.json()
    return
}
export default Post

