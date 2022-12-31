import PrimaryArticle from "./PrimaryArticle";
import SecondaryArticles from "./SecondaryArticles";

export default function Section({section}) {
    return (
        <>
            <h3>{section.name} articles</h3>
            <PrimaryArticle key={section.articles[0].id} article={section.articles[0]}/>
            <SecondaryArticles articles={section.articles.slice(1)}/>
        </>
        
    );
}