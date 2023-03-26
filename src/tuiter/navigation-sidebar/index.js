import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = (
  {
    active = 'explore'
  }
) => {
  //   const [screen, setScreen] = React.useState("otherScreen");
  //   <nav>
  //   <button onClick={() => setScreen("home")}>Home</button>
  //   <button onClick={() => setScreen("otherScreen")}>Explore</button>
  // </nav>

  return (<div className="list-group">
    <a className="list-group-item">Tuiter</a>
    <a className={`list-group-item
                   ${active === 'home' ? 'active' : ''}`}>
      {/* <button className="btn p-0" onClick={() => active = 'home'}>Home</button> */}
      {/* <button className="btn p-0" onClick={() => setScreen("home")}>Home</button> */}
      <Link to="/home">Home</Link>
    </a>
    <a className={`list-group-item
                   ${active === 'explore' ? 'active' : ''}`}>
      {/* <button className="btn p-0" onClick={() => active = 'explore'}>Explore</button>
      <button className="btn p-0" onClick={() => setScreen("otherScreen")}>Explore</button> */}
      <Link to="/">Explore </Link>
    </a>
    <a className={`list-group-item
                   ${active === 'notifications' ? 'active' : ''}`}>
      Notifications
    </a>
    <a className={`list-group-item
                   ${active === 'messages' ? 'active' : ''}`}>
      Messages
    </a>
    <a className={`list-group-item
                   ${active === 'bookmarks' ? 'active' : ''}`}>
      Bookmarks
    </a>
    <a className={`list-group-item
                   ${active === 'lists' ? 'active' : ''}`}>
      Lists
    </a>
    <a className={`list-group-item
                   ${active === 'profile' ? 'active' : ''}`}>
      Profile
    </a>
    <a className={`list-group-item
                   ${active === 'more' ? 'active' : ''}`}>
      More
    </a>
  </div>);
};
export default NavigationSidebar;