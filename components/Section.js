import PrimaryArticle from "./PrimaryArticle";
import SecondaryArticles from "./SecondaryArticles";

import styles from '../styles/Home.module.scss';

import Link from "next/link";

export default function Section({section}) {
    return (
        <div className={styles.section}>
            <h3 className={`${styles.sectionName} ${section.name}`}><Link href={`/section/${section.name.toLowerCase()}`}>{section.name}</Link></h3>
            <div className={styles.articles}>
                <PrimaryArticle key={`prim-${section.articles[1].slug}`} article={section.articles[1]}/>
                <SecondaryArticles articles={section.articles.slice(2)}/>
            </div>
            {section.name == 'Opinions' ? "" : <hr styles={styles.hr}/>}
        </div>
    );
}