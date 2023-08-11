import React from 'react';

export default function Card(props) {
    //destructuring props
    const {title, userId} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        {/* <img src={`https://robohash.org/${id}?50x50`} alt="robo"/> */}
        <img src="https://random.imagecdn.app/500/150" alt="robo"/>
        <div>
            <h2>{userId}</h2>
            <p>{title}</p>
        </div>
        </div>
    );
    }   

