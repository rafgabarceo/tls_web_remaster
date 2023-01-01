import BannerArticle from './BannerArticle';

export default function BannerArticles({sections}) {
    const bannerArticles = sections.map(section => <BannerArticle key={section.category} article={section.articles[0]}/>);
    return (
        <>
            <h2>Banner articles</h2>
            {bannerArticles}
            <hr />
        </>
    );
}