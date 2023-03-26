import React from 'react';
import ExploreComponent from "./explore";
import NavigationSidebar
    from "./navigation-sidebar";
import HomeTuits from './home';
import WhoToFollowList from "./who-to-follow-list";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import homeReducer from "./tuits/home-tuits-reducer";

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { configureStore }
    from '@reduxjs/toolkit';
import { Provider } from "react-redux";
const store = configureStore(
    { reducer: { who: whoReducer, tuits: tuitsReducer, home: homeReducer } });

function Tuiter() {
    const [screen, setScreen] = React.useState("explore");

    return (
        <Provider store={store}>

            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={screen} />
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                    style={{ "position": "relative" }}>
                    <div>
                        <nav>
                            <button onClick={() => setScreen("home")}>Home</button>
                            <button onClick={() => setScreen("explore")}>Explore</button>
                        </nav>
                        {screen === "home" ?
                            <HomeTuits />
                            : screen === "explore" ?
                                <ExploreComponent />
                                : null}
                    </div>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter