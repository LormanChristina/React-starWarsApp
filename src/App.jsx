import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {arrPlanets, base_URL, homePage} from "./utils/Constants";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPage: homePage,
            hero: '',
            planets: '',
            newHero: 'Luke Skywalker'
        }
    }

    changeMainPage = (page) => {
        this.setState({mainPage: page});
    }

    componentDidMount () {
        window.addEventListener('hashchange', () => {
            console.log(window.location.hash.substring(2))
            this.changeMainPage(window.location.hash.substring(2))
        })
    }

    funcAboutHero = () => {
        let person = JSON.parse(localStorage.getItem('aboutHero'));
        if(!person || person.name !== this.state.newHero) {
            fetch(`${base_URL}/peoples/`)
                .then(response => response.json())
                .then(body => {
                    for(let i = 0; i < body.length; i++) {
                        if(body[i].name == this.state.newHero){
                            this.setState({hero: body[i]})
                            localStorage.setItem('aboutHero', JSON.stringify(body[i]))
                        }
                    }
                });
        } else {
            this.setState({hero: JSON.parse(localStorage.getItem('aboutHero'))})
        }

    }

    funcInfoPlanets = () => {
        if(!localStorage.getItem('planets')) {
            fetch(`${base_URL}/planets`)
                .then(response => response.json())
                .then(body => {
                    body.map(item => arrPlanets.push(item));
                    localStorage.setItem('planets', JSON.stringify(arrPlanets));
                    this.setState({planets: arrPlanets})
                })
        } else {
            JSON.parse(localStorage.getItem('planets')).map(item => arrPlanets.push(item));
            this.setState({planets: JSON.parse(localStorage.getItem('planets'))})
        }
    }

    changeHero = (newHero) => {
        this.setState({newHero});
    }

    render () {
        return (
            <div className="container-fluid">
                <Header planets={this.funcInfoPlanets} hero={this.funcAboutHero} newHero={this.state.newHero}/>
                <Main hero={this.state.hero} newHero={this.state.newHero} changeHero={this.changeHero}/>
            </div>
        );
    }

}

export default App;
