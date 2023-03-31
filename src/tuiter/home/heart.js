import React, { useState } from "react";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

function LikeButton(props) {
    const [liked, setLiked] = useState(props.liked);
    let heart;
    // if (liked && props.liked) {
    //     heart = <span><i className="bi bi-heart-fill"></i> {props.likes}</span>;
    // }
    // else if (liked && !props.liked) {
    //     heart = <span><i className="bi bi-heart-fill"></i> {props.likes + 1}</span>;
    // }
    // else if (!liked && !props.liked) {
    //     heart = <span><i className="bi bi-heart"></i> {props.likes}</span>;
    // }
    // else if (!liked && props.liked) {
    //     heart = <span><i className="bi bi-heart"></i> {props.likes - 1}</span>;
    // }
    // return (
    //     <button type="button" className="btn p-0" onClick={() => setLiked((isLiked) => !isLiked)}>
    //         {heart}
    //     </button>
    // );

    const dispatch = useDispatch();

    // <div className="col-2">
    //     <i onClick={() => dispatch(updateTuitThunk({
    //         ...props.post,
    //         dislikes: props.dislikes + 1
    //     }
    //     ))} className="bi bi-hand-thumbs-down me-2 text-black"></i>
    //     {props.dislikes}
    // </div>
};

export default LikeButton;