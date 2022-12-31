import React from "react";
import AboutUs from "../components/body/AboutPage";

export default function About({staffers}) {
    return (
        <React.Fragment>
            <AboutUs staffers={staffers}/>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            staffers: data,
        },
        revalidation: 1,
    };
}