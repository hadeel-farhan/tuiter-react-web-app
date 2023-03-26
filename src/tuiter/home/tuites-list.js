import React from "react";
import { useSelector } from "react-redux";
import PostSummaryItem
    from "./home-tuits-item";

const HomeTuits = () => {
    const postsArray = useSelector(state => state.home)
    return (
        <div>
            <h3> Home</h3>
            <ul className="list-group">
                {
                    postsArray.map(post =>
                        <PostSummaryItem
                            key={post._id} post={post} />)
                }
            </ul>
        </div>
    );
};

export default HomeTuits;