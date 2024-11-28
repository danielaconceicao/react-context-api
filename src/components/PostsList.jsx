import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export default function PostsList() {
    const { postsList } = useContext(PostsContext)

    return (
        <>
            <div className="container">
                <div className="row">
                    {postsList.map(post => (
                        <div key={post.id} className="col-sm-6 mb-3 mb-sm-0 py-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body">
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}