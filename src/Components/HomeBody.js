import React from "react";
import Sections from "./Sections.js";

class HomeBody extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="banner">
                    <div className="shade">
                        <div className="contents">
                            <p className="title">Heading</p>
                            <p className="authors">by Frank Santiago</p>
                            <p className="snippet">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit odit a iste, libero nostrum quam! Laudantium unde et sunt quibusdam aliquam, cupiditate eum, facilis iure sed molestias quo ipsum officia quia. Repellendus magnam tempora molestias aspernatur totam delectus alias eligendi, inventore porro iure excepturi minima corporis qui nemo sint consectetur.</p>
                        </div>
                    </div>
                    <img className="image" src="./image_test.jpg" alt=""/> 
                </div>
                <hr/>
                <Sections/>
            </React.Fragment>
        );
    }
}

export default HomeBody;