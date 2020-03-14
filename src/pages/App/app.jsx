import React from 'react';
import './app-style.scss';

import TopBar from './components/TopBar/TopBar';
import Main from './components/Main/main';

const Appi = () => {
    return (
            <div className="appi">
                <TopBar/>
                <Main/>
            </div>
        
    )
}

export default Appi;