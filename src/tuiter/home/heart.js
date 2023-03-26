import React, { useState } from "react";
function LikeButton(props) {
    const [liked, setLiked] = useState(false);
    if (liked) {

    }

    return (
        <button type="button" className="btn p-0" onClick={() => setLiked((isLiked) => !isLiked)}>
            {liked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>} 
            {liked ? props.likes + 1 : props.likes}
        </button>
    );
};

export default LikeButton;