import Link from "next/link";
import React from "react";

import SecondaryArticles from "../components/lists/SecondaryArticles";

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
                <h2>banner article</h2>
                <ul>
                    <Link href={`/presents/${sections[0].articles[0].slug}`}><li>{sections[0].section} - <span dangerouslySetInnerHTML={{__html: sections[0].articles[0].title.rendered}}/></li></Link>
                    <li>{sections[1].section} - <span dangerouslySetInnerHTML={{__html: sections[1].articles[0].title.rendered}}/></li>
                    <li>{sections[2].section} - <span dangerouslySetInnerHTML={{__html: sections[2].articles[0].title.rendered}}/></li>
                    <li>{sections[3].section} - <span dangerouslySetInnerHTML={{__html: sections[3].articles[0].title.rendered}}/></li>
                    <li>{sections[4].section} - <span dangerouslySetInnerHTML={{__html: sections[4].articles[0].title.rendered}}/></li>
                </ul>
            <hr />
            <hr />
                <h2>article sections</h2>
                <h3>univ</h3>
                <ul>
                    <li>{sections[0].section} {sections[0].articles.length}</li>
                </ul>
                <h3>menage</h3>
                <ul>
                    <li>{sections[1].section} {sections[1].articles.length}</li>
                </ul>
            <hr />
        </React.Fragment>
    );
}

export async function getStaticProps() {
    //4 == univ
    //8 == menage
    //6 == sports
    //1883 == vanguard
    //5 == opinion

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
                    section: 'University',
                    articles: universityData,
                },
                {
                    section: 'Menagerie',
                    articles: menagerieData,
                },
                {
                    section: 'Sports',
                    articles: sportsData,
                },
                {
                    section: 'Vanguard',
                    articles: vanguardData,
                },
                {
                    section: 'Opinions',
                    articles: opinionData,
                },
            ],
        },
        revalidate: 1,
    };
}