import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
    <div>
        <div class="card p-0 pt-2 ps-2">
            <div class="card-body p-0">
                <p class="fw-bold p-0">Who to follow</p>
            </div>
        </div>
    ${who.map(follow => WhoToFollowListItem(follow)).join('')}
    </div>
 `);
}

export default WhoToFollowList;