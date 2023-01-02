import React from 'react';
import Section from './Section.js';

class Sections extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="section" id="University">
                    <Section section={"University"}/>
                </div>
                <hr/>
                <div className="section" id="Menagerie">
                    <Section section={"Menagerie"}/>
                </div>
                <hr/>
                <div className="section" id="Sports">
                    <Section section={"Sports"}/>
                </div>
                <hr/>
                <div className="section" id="Vanguard">
                    <Section section={"Vanguard"}/>
                </div>
                <hr/>
                <div className="section" id="Opinion">
                    <Section section={"Opinion"}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Sections;