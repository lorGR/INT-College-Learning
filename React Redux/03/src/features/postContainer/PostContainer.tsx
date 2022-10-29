import PostCard from "../postCard/PostCard";
import { posts } from "./postModel";

const PostContainer = () => {
  return (
    <div className="post-container">
        {posts.map((post, index) => {
            return <PostCard text={post.text} imgSrc={post.imgSrc} key={index}/>
        })}
    </div>
  )
}

export default PostContainer;