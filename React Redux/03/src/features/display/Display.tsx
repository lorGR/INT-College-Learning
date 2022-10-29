import { useAppSelector } from "../../app/hooks"
import { selectPost } from "../posts/postSlice"

const Display = () => {
    const post = useAppSelector(selectPost);
    return (
        <div className="display">
            {post.text.length < 0 && "Click on one image" } 
            {post.text.length > 0 && 
                <div className="display-card">
                    <h1>{post.text}</h1>
                    <img src={post.imgSrc} alt={post.text} />
                </div>
            }
        </div>
    )
}

export default Display