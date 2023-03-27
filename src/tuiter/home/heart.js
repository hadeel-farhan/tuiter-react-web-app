import React, { useState } from "react";
function LikeButton(props) {
    const [liked, setLiked] = useState(props.liked);
    let heart;
    if (liked && props.liked) {
        heart = <span><i className="bi bi-heart-fill"></i> {props.likes}</span>;
    }
    else if (liked && !props.liked) {
        heart = <span><i className="bi bi-heart-fill"></i> {props.likes + 1}</span>;
    }
    else if (!liked && !props.liked) {
        heart = <span><i className="bi bi-heart"></i> {props.likes}</span>;
    }
    else if (!liked && props.liked) {
        heart = <span><i className="bi bi-heart"></i> {props.likes - 1}</span>;
    }
    return (
        <button type="button" className="btn p-0" onClick={() => setLiked((isLiked) => !isLiked)}>
            {heart}
        </button>
    );
};

export default LikeButton;