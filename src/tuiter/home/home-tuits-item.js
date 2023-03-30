import React from "react";
import LikeButton from "./heart";
import { useDispatch } from "react-redux";
import { deleteTuitThunk, updateTuitThunk } from "../../services/tuits-thunks";

const HomeTuitItem = (
    {
        post = {
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img height={48} width={48} className="float-start rounded-circle" src={`/images/${post.image}`} />
                </div>
                <div className="col-10">
                    <button onClick={() => deleteTuitHandler(post._id)} className="btn p-0 float-end">
                        <i className="bi bi-x-lg float-end"></i>
                    </button>
                    <div><span className="fw-bolder">{post.userName} </span> <span> {post.handle} . {post.time}</span> </div>
                    <div>{post.title}</div>
                    <div>{post.tuit}</div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-2"> </div>
                <div className="col-2"><i class="bi bi-chat"></i> {post.replies} </div>
                <div className="col-2"><i class="bi bi-share"></i> {post.retuits}</div>
                <div className="col-2">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes + 1
                    }
                    ))} className="bi bi-heart-fill me-2 text-danger"></i>
                    {post.likes}
                </div>
                <div className="col-2">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        dislikes: post.dislikes + 1
                    }
                    ))} className="bi bi-hand-thumbs-down me-2 text-black"></i>
                    {post.dislikes}
                </div>
                {/* 
                <div className="col-2">
                    <LikeButton likes={post.likes} liked={post.liked} />
                </div> */}
            </div>
        </li >
    );
};
export default HomeTuitItem;