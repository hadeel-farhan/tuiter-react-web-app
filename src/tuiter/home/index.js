import React from "react";
import { useSelector } from "react-redux";
import PostSummaryItem
    from "./home-tuits-item";
const HomeTuits = () => {
    const postsArray = useSelector(state => state.home)
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post} />)
            }
        </ul>
    );
};
export default HomeTuits;