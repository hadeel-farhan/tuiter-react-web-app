import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeTuitItem
    from "./home-tuits-item";
import { findTuitsThunk }
    from "../../services/tuits-thunks";

const HomeTuits = () => {
    const { tuits, loading } = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return (
        <div>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }

                {
                    tuits.map(post =>
                        <HomeTuitItem
                            key={post._id} post={post} />)
                }
            </ul>
        </div>
    );
};

export default HomeTuits;