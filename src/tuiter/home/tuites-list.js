import React from "react";
import { useSelector } from "react-redux";
import HomeTuitItem
    from "./home-tuits-item";

const HomeTuits = () => {
    const postsArray = useSelector(state => state.tuits)
    return (
        <div>
            <ul className="list-group">
                {
                    postsArray.map(post =>
                        <HomeTuitItem
                            key={post._id} post={post} />)
                }
            </ul>
        </div>
    );
};

export default HomeTuits;