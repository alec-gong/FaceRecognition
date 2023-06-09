import React from 'react';
//import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import icon from './icon.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt tiltEnable={false} scale={1.1}>
                <div style={{ height: 200, width: 200}}>
                    <div className="Tilt-inner pa1">
                        <img style={{paddingTop: '3px'}} src={icon} alt='logo'></img>
                    </div> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;