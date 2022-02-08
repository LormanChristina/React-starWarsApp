import React from 'react';
import style from '../css_modules/friend.module.css'
import {Link} from "react-router-dom";
import {heroes, homePage} from "../utils/Constants";

const Friend = (props) => {
    let friend;
    let roundClass;
    if (props.number === 7) {
        roundClass = style.bottomLeft;
    }
    if (props.number === 9) {
        roundClass = style.bottomRight;
    }
    friend = <img onClick={() => props.changeHero(heroes[props.friend].name)} className={`w-100 ${roundClass}`} src={heroes[props.friend].img} alt={heroes[props.friend].name}/>;
    return (
        <div className={`col-4 p-1`}>
            <Link to={`/${homePage}/${props.friend}`}>{friend}</Link>
        </div>

    );
};

export default Friend;