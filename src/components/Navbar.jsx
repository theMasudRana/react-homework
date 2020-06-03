import React, {Component} from "react";
const NavBar = ({totalCounters}) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Navbar
                        <span className="badge badge-pill badge-secondary ml-2">
                            {totalCounters}
                        </span>
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavBar;
