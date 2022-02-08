import React from 'react';
import {base_URL, characters, heroes} from "../utils/Constants";
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import style from "../css_modules/main.module.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            episode: ''
        }
    }

    componentDidMount() {
        let episodeNumber = (Math.random() * (7 - 1) + 1);
        episodeNumber = Math.round(episodeNumber);
        fetch( `${base_URL}/films/${episodeNumber}`)
            .then(response => response.json())
            .then(body => {
                this.setState({episode: body.opening_crawl});
                localStorage.setItem('episode', body.opening_crawl);
            })
        let hero = this.props.match.params.hero;
        if(!characters.includes(hero)) {
            hero = characters[0]
        }
        this.props.changeHero(heroes[hero].name);
    }


    render() {
        let hero = this.props.match.params.hero;
        if(!characters.includes(hero)) {
            hero = characters[0]
        }

        return (
            <main className="clearfix">
                <Hero hero={hero}/>
                <DreamTeam hero={hero} changeHero={this.props.changeHero}/>
                <p className={`${style.farGalaxy}`}>{this.state.episode}</p>
            </main>
        );
    }
}

export default Home;