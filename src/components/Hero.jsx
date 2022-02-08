import React from 'react';
import {heroes} from '../utils/Constants';

const Hero = (props) => {
    return (
        <section className="float-start w-25 mr-1 row">
            <img className="col-12 p-3 rounded" src={heroes[props.hero].img} alt="Hero"/>
        </section>
    );
};

export default Hero;