import React from 'react';

const AboutMe = (props) => {
    return (
        <div>
            <ul className='list_features'>
                <li><span className='text-warning'>Name: </span>{props.hero.name}</li>
                <li><span className='text-warning'>Height:  </span>{props.hero.height}</li>
                <li><span className='text-warning'>Birth year:  </span>{props.hero.birth_year}</li>
                <li><span className='text-warning'>Gender:  </span>{props.hero.gender}</li>
                <li><span className='text-warning'>Hair color:  </span>{props.hero.hair_color}</li>
                <li><span className='text-warning'>Skin color:  </span>{props.hero.skin_color}</li>
                <li><span className='text-warning'>Eye color:  </span>{props.hero.eye_color}</li>
            </ul>
        </div>
    )
}

export default AboutMe;