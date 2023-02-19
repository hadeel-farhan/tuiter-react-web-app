const WhoToFollowListItem = (who) => {
    return (`<div class="card">
    <div class="card-body">
        <img class="float-start mw-1 mh-1 me-3 img-card-3 rounded-circle" src="${who.avatarIcon}">
        <button class="btn btn-primary float-end rounded-pill">
            Follow
        </button>
        <span class="fw-bold">${who.userName}</span>
        <p> @ ${who.handle} </p>
    </div>
</div>`);
}

export default WhoToFollowListItem;