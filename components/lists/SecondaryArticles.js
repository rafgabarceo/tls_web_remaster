import SecondaryArticle from "../article-cards/SecondaryArticle";

export default function SecondaryArticles({articles}) {
    return (
        articles.map(article => <SecondaryArticle key={article.id} article={article}/>)
    );
}