import Link from "next/link";
import React from "react";

import BannerArticles from "../components/BannerArticles";
import Sections from "../components/Sections";

export default function Home({sections}) {
    return (
        <React.Fragment>
            <h1>TheLaSallian</h1>
            <hr />
                <h2>navbar</h2>
                <ul>
                    <li><Link href='/about'>About</Link></li>
                    <li>Univ</li>
                    <li>Menage</li>
                    <li>Sports</li>
                    <li>Vanguard</li>
                </ul>
            <hr />
                <BannerArticles sections={sections}/>
            <hr />
                <Sections sections={sections}/>
            <hr />
        </React.Fragment>
    );
}

export async function getServerSideProps() {
    const universityResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=5&categories=4');
    const universityData = await universityResponse.json();

    const menagerieResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=5&categories=8');
    const menagerieData = await menagerieResponse.json();

    const sportsResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=5&categories=6');
    const sportsData = await sportsResponse.json();

    const vanguardResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=5&categories=1883');
    const vanguardData = await vanguardResponse.json();

    const opinionResponse = await fetch('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,slug,categories,jetpack_featured_media_url&per_page=5&categories=5');
    const opinionData = await opinionResponse.json();

    return {
        props: {
            sections: [
                {
                    name: 'University',
                    category: 4,
                    articles: universityData,
                },
                {
                    name: 'Menagerie',
                    category: 8,
                    articles: menagerieData,
                },
                {
                    name: 'Sports',
                    category: 6,
                    articles: sportsData,
                },
                {
                    name: 'Vanguard',
                    category: 1883,
                    articles: vanguardData,
                },
                {
                    name: 'Opinions',
                    category: 5,
                    articles: opinionData,
                },
            ],
        },
    };
}