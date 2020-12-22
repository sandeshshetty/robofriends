import React from 'react';

const Card = (props) => {
    const { name, email, username } = props;
    return (
        <div className='bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${username}?200x20`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;