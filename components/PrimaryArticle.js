import Link from "next/link";
import styles from '../styles/Home.module.scss';

export default function PrimaryArticle({article}) {
    return (
        <Link href={`/presents/${article.slug}`}>
            <div className={styles.primary}>
                <p>-- primary - <span dangerouslySetInnerHTML={{__html: article.title.rendered}}/></p>
            </div>
        </Link>
        
    );
}