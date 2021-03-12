import React from 'react';
import About from '../components/Home/About';
import Header from '../components/Home/Header';
import SomeRenovations from '../components/Home/SomeRenovations';
import WeBuildForYou from '../components/Home/WeBuildForYou';
import Contact from '../components/ShareComponents/Contact';

const index = () => {
    return (
        <div>
            <Header/>
            <About/>
            <WeBuildForYou/>
            <SomeRenovations/>
            <Contact/>
        </div>
    );
};

export default index;