import React from "react";
import luke from "../Images/main.jpg";
import r2d2 from "../Images/friend1.jpg";
import c3po from "../Images/friend2.jpg";
import ewok from "../Images/friend3.jpg";
import chewbacca from "../Images/friend4.jpg";
import han_solo from "../Images/friend5.jpg";
import leya from "../Images/friend6.jpg";
import falcon from "../Images/friend7.jpg";
import obi_wan from "../Images/friend8.jpg";
import yoda from "../Images/friend9.jpg";

let arrPlanets = [];
const friends = [r2d2, c3po, ewok, chewbacca, han_solo, leya, falcon, obi_wan, yoda];
const starWars = 'Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous \n' +
    '                1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various \n' +
    '                films and other media, including television series, video games, novels, comic books, theme park attractions, \n' +
    '                and themed areas, comprising an all-encompassing fictional universe. In 2020, its total value was estimated \n' +
    '                at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.'
const base_URL = 'https://sw-info-api.herokuapp.com/v1';
const homePage = 'home';
const contactPage = 'contactPage';
const starWarsPage = 'starWars';
const aboutMePage = 'AboutMe';

export const UserContext = React.createContext();
export {friends, base_URL, homePage, contactPage, starWarsPage, aboutMePage, arrPlanets, starWars};

export const heroes = {
    luke: {
        name: "Luke Skywalker",
        img: luke,
        url: `${base_URL}/peoples/1`
    },
    r2d2: {
        name: "R2-D2",
        img: r2d2,
        url: `${base_URL}/peoples/3`
    },
    c3po: {
        name: "C-3PO",
        img: c3po,
        url: `${base_URL}/peoples/2`
    },
    ewok: {
        name: "Wicket Systri Warrick",
        img: ewok,
        url: `${base_URL}/peoples/30`
    },
    chewbacca: {
        name: "Chewbacca",
        img: chewbacca,
        url: `${base_URL}/peoples/13`
    },
    han_solo: {
        name: "Han Solo",
        img: han_solo,
        url: `${base_URL}/peoples/14`
    },
    leia: {
        name: "Leia Organa",
        img: leya,
        url: `${base_URL}/peoples/5`
    },
    falcon: {
        name: "Darth Vader",
        img: falcon,
        url: `${base_URL}/peoples/4`
    },
    obi_wan: {
        name: "Obi-Wan Kenobi",
        img: obi_wan,
        url: `${base_URL}/peoples/10`
    },
    yoda: {
        name: "Yoda",
        img: yoda,
        url: `${base_URL}/peoples/0`
    }
};

export const characters = Object.keys(heroes)