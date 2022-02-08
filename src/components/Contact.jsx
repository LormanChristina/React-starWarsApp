import React, { useState } from 'react';
import { arrPlanets } from "../utils/Constants";

const Contact = () => {
    const [isActive, setIsActive] = useState(false);
    const [id, setId] = useState('');

    function choosePlanet (id) {
        setIsActive(!isActive)
        setId(id);
    }

    return (
        <div className='planetBlock'>
            {arrPlanets.map((item, index) =>
            <div key={index}>
                <h2 onClick={() => choosePlanet(item.id)}>{item.name}</h2>
                <div>
                    {item.id == id ? 
                      <div className={isActive ? 'displayPlanet' : 'noDisplayPlanet'}>
                        <h3>Climate:<span> {item.climate}</span></h3> 
                        <h3>Surface water:<span> {item.surface_water}</span></h3>
                        <h3>Diameter:<span> {item.diameter}</span></h3>
                        <h3>Rotation period:<span> {item.rotation_period}</span></h3>
                        <h3>Orbital period:<span> {item.prorbital_period}</span></h3>
                        <h3>Terrain:<span> {item.terrain}</span></h3>
                        <h3>Population:<span> {item.population}</span></h3> 
                    </div> : null}
                </div>
            </div>)}
        </div>
    ) 
}


export default Contact;