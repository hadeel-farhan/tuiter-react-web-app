import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div>
            <div class="mb-3">
                <i class="fa fa-cog float-end"></i>
                <input type="search" class="form-control form rounded-pill" id="input1" placeholder="Search Tuiter">
            </div>
            <ul class="nav nav-tabs cards">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div class="p-0">
                <img src="../../images/rocket.png" class="cards">
            </div>
           ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;
