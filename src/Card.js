import React from 'react';
import 'tachyons';

const Card = (params) => {
    return (
        <div className='bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img alt="robot" src="https://robohash.org/test?200x200" />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
};

export default Card;