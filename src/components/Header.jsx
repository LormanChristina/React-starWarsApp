import React from 'react';
import Navigation from "./Navigation";

const Header = (props) => {
    return (
        <header className='py-3'>
            <Navigation planets={props.planets} hero={props.hero}/>
            <h1 className='text-center py-4'>{props.newHero}</h1>
        </header>
    )
}

export default Header;