import SecondaryArticle from "./SecondaryArticle";

export default function SecondaryArticles({articles}) {
    const secondaryArticles = articles.map(article => <SecondaryArticle key={article.id} article={article}/>);
    return (
        secondaryArticles
    );
}