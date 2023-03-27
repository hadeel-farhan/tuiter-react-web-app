import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const NavigationSidebar = (
  {
    active = screen
  }
) => {
  const [screen, setScreen] = React.useState("explore");
  let path = window.location.pathname;

  return (<div className="list-group">
    <a className="list-group-item">Tuiter</a>
    <a className={`list-group-item
                   ${path === '/home' ? 'active' : ''}`}>
      <button className="btn p-0 " onClick={() => setScreen("home")}>
        <Link to="/home">Home</Link>
      </button>
    </a>
    <a className={`list-group-item
                   ${path === '/explore' ? 'active' : ''}`}>
      <button className="btn p-0" onClick={() => setScreen("explore")}>
        <Link to="/explore">Explore</Link>
      </button>
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