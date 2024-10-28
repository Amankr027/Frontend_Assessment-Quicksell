import React from 'react';
import './index.css';

function Spinner({ fullscreen = true }) {
    return (
        <div className={`loader-container ${fullscreen ? "fullscreen" : ""}`}>
            <span className='loader'>Loading...</span>
        </div>
    );
}

export default Spinner;
