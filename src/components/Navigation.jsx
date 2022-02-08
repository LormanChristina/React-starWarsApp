import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import {Link} from "react-router-dom";

const Navigation = (props) => {
    return (
        <nav className="fixed-top ml-5">
            <ul className="nav">
                <Link to={`/${homePage}`}><li className="nav-item btn btn-danger mx-1">Home</li></Link>
                <Link to={`/${aboutMePage}`}><li className="nav-item btn btn-danger mx-1" onClick={() => props.hero()}>About hero</li></Link>
                <Link to={`/${starWarsPage}`}><li className="nav-item btn btn-danger mx-1">Star Wars</li></Link>
                <Link to={`/${contactPage}`}><li className="nav-item btn btn-danger mx-1" onClick={() => props.planets()}>Planets</li></Link>
            </ul>
        </nav>
    );
};

export default Navigation;