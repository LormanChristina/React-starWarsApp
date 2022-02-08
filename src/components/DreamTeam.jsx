import React from 'react';
import {characters} from "../utils/Constants";
import Friend from "./Friend";

const DreamTeam = (props) => {
    const keys = characters.filter(item => item !== props.hero);
    return (
        <section className="float-end w-50 row no-gutters rounded-bottom ml-1 ps-4">
            <h2 className="col-12 text-center">Dream Team</h2>
            {keys.map((item, index) => <Friend key={index} number={index + 1} changeHero={props.changeHero} friend={item}/>)}
        </section>
    );
};

export default DreamTeam;