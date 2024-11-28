import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export default function PostsList() {
    const { postsList } = useContext(PostsContext)

    return (
        <>
            {postsList.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}

        </>
    )
}