import React from 'react';
import Pico from './Pico.png';

const Logo = () => {

    return (
        <div className='ma4 mt0'>
            <div className="br2 shadow-2 pa3" style={{ height: 150, width: 150 }}>
                <img style={{ paddingTop: '5px' }} alt='logo' src={Pico}></img>
            </div>
        </div>
    );
}

export default Logo;