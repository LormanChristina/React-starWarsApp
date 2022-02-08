import React from 'react';
import Home from "./Home";
import {Switch, Route} from 'react-router-dom'
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import StarWars from "./StarWars";
import ErrorPage from "./ErrorPage";

const Main = (props) => {
    return (
            <Switch>
                <Route path={['/', `/${homePage}`, `/${homePage}/:hero`]} exact render={(value) => <Home {...value} changeHero={props.changeHero}/>}/>
                <Route path={[`/${aboutMePage}`, `/${aboutMePage}/:person`]} exact render={(value) => <AboutMe {...value} changeHero={props.changeHero} newHero={props.newHero} hero={props.hero}/>}/>
                <Route path={`/${starWarsPage}`} component={StarWars}/>
                <Route path={`/${contactPage}`} component={Contact}/>
                <Route component={ErrorPage}/>
            </Switch>
    )

}
export default Main;