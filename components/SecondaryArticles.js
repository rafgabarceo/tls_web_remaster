import SecondaryArticle from "./SecondaryArticle";
import styles from '../styles/Home.module.scss';

export default function SecondaryArticles({articles}) {
    const secondaryArticles = articles.map(article => <SecondaryArticle key={`sec-${article.slug}`} article={article}/>);
    return (
        <div className={styles.secondary}>
            {secondaryArticles}
        </div>
    );
}