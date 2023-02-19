import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js";

const PostSummaryList = () => {
    return (`
    <div>
    ${exploreItems.map(post => PostSummaryItem(post)).join('')}
    </div>
 `);
}

export default PostSummaryList;