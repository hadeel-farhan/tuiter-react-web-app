
const PostSummaryItem = (post) => {
    return (`
    <div class="card">
        <div class="card-body">
            <img class="float-end mw-1 mh-1 img-card-5 " src="${post.image}">
            <span class="text-secondary">${post.topic}</span>
            <br>
            <span class="fw-bold">${post.userName} </span>
            <span class="text-secondary"> - ${post.time}</span>
            <br>
            <span class="fw-bold"> ${post.title} </span>
        </div>
    </div>
    `);
}
export default PostSummaryItem;