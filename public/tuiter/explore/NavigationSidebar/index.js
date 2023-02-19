const NavigationSidebar = () => {
    return (`
    <ul class="nav nav-pills m-3">
    <div class="cards">
        <div class="nav-item card">
            <a class="nav-link" href="#"><i class="fab fa-twitter"></i> </a>
        </div>
        <div class="nav-item card">
            <a class="nav-link" href="#"><i class="fa fa-home float-start"></i> <span
                    class="d-none d-xl-block"> Home
                </span></a>
        </div>
        <div class="nav-item card">
            <a class="nav-link active" href="#"><i class="fa fa-hashtag float-start"></i> <span
                    class="d-none d-xl-block"> Explore </span></a>
        </div>
        <div class="nav-item card">
            <a class="nav-link" href="#"><i class="fa fa-bell float-start"></i> <span
                    class="d-none d-xl-block float-end">
                    Notifications </span></a>
        </div>
        <div class="nav-item card">
            <a class="nav-link" href="#"> <i class="fa fa-comment float-start"></i> <span
                    class="d-none d-xl-block">
                    Messages </span></a>
        </div>
        <div class="nav-item card">
            <a class="nav-link" href="#"><i class="fa fa-bookmark float-start"></i> <span
                    class="d-none d-xl-block">
                    Bookmarks </span></a>
        </div>
        <div class="nav-item card">
            <a class="nav-link" href="#"><i class="fa fa-list float-start"></i> <span
                    class="d-none d-xl-block"> Lists
                </span></a>
        </div>
        <div class="nav-item card">
            <a class="nav-link" href="#"><i class="fa fa-circle float-start"></i> <span
                    class="d-none d-xl-block">
                    Profile </span></a>
        </div>
        <div class="nav-item card">
            <a class="nav-link" href="#"><i class="fa fa-bookmark float-start"></i> <span
                    class="d-none d-xl-block">
                    More </span></a>
        </div>
        <button class="btn btn-primary mt-3 rounded-pill">Tweet</button>
        </ul>
    `);
}
export default NavigationSidebar;