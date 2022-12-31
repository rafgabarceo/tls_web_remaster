import Link from "next/link";
import React from "react";

import SecondaryArticles from "../components/lists/SecondaryArticles";

export default function Home({articles}) {
    return (
        <React.Fragment>
            <h1>Home page</h1>
            <ul>
                <li><Link href='/about'>About</Link></li>
                <li>Univ</li>
                <li>Menage</li>
                <li>Sports</li>
                <li>Vanguard</li>
            </ul>
            <hr />
            <SecondaryArticles articles={articles}/>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            articles: data.slice(0,20),
        }
    };
}