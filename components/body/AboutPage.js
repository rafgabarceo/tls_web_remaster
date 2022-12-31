import React from 'react';
import Staffers from '../lists/Staffers'

export default function AboutPage({staffers}) {
    return (<React.Fragment>
        <div className="about">About Us</div>
        <Staffers staffers={staffers}/>
    </React.Fragment>);
}