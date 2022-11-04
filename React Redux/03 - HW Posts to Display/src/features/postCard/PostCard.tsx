import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { changePost } from "../posts/postSlice";

export interface PostCardProps {
    text: string;
    imgSrc: string;
}


const PostCard: React.FC<PostCardProps> = ({ text, imgSrc }) => {

    const dispatch = useAppDispatch()

    const handleClick = (event: any) => {
        try {
            let input ;
            let postDetails;
            if(event.target.tagName === "H1") {
                input = event.target.nextSibling;
            }
            if(event.target.tagName === "IMG") {
                input = event.target;
            }
            postDetails = {
                text: input.alt,
                imgSrc: input.src
            }
            dispatch(changePost(postDetails));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="post-card" onClick={handleClick}>
            <h1>{text}</h1>
            <img src={imgSrc} alt={text} />
        </div>
    )
}

export default PostCard;