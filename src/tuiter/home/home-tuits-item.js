import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "rocket.png"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img height={48} width={48} className="float-start rounded-circle" src={`/images/${post.image}`} />
                </div>
                <div className="col-10">
                    {/* <div>{post.userName} . {post.time}</div> */}
                    <div><span className="fw-bolder">{post.userName} </span> <span> {post.handle} . {post.time}</span> </div>
                    <div>{post.title}</div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-2"> </div>
                <div className="col-2">{post.replies} </div>
                <div className="col-2">{post.retuits}</div>
                <div className="col-2">{post.likes}</div>
            </div>
        </li >
    );
};
export default PostSummaryItem;