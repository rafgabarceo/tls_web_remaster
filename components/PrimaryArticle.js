import Link from "next/link";
import styles from '../styles/Home.module.scss';

export default function PrimaryArticle({article}) {

    function cleanExcerpt(title, excerpt) {
        const charCountLimit = (title.length > 40)? 150 : 300; //Fits 155 ideally, but add allowance

        let endTagIndex = excerpt.indexOf("</");
        excerpt = excerpt.substring(0,endTagIndex);
        let lastSpaceIndex = excerpt.substring(0,charCountLimit).lastIndexOf(" ");
        return excerpt.substring(0,lastSpaceIndex)+`... <span class=${styles.readMore}>Read more</span></p>`;
    }

    function listAuthors(authors){
        //TODO: Optimize this function

        return authors.map((author, index) =>
            {if(authors.length > 2) {
                if(index == (authors.length - 1)) {
                    return (
                        <>
                            <span> and </span><Link href={`/by/${author.slug}`}>{author.display_name}</Link>
                        </>
                    );
                } else {
                    return (
                        <>
                            <Link href={`/by/${author.slug}`}>{author.display_name}</Link><span>, </span>
                        </>
                    );
                }
            } else if(authors.length == 2) {
                if(index == (authors.length - 1)) {
                    return (
                        <>
                            <span> and </span><Link href={`/by/${author.slug}`}>{author.display_name}</Link>
                        </>
                    );
                } else {
                    return (
                        <Link href={`/by/${author.slug}`}>{author.display_name}</Link>
                    );
                }
            } else  {
                return (
                    <>
                        <Link href={`/by/${author.slug}`}>{author.display_name}</Link>
                    </>
                )
            }}
        );
    }

    const excerpt = cleanExcerpt(article.title.rendered, article.excerpt.rendered);
    const authors = listAuthors(article.authors);

    return (
            <div className={styles.primary}>
                <div className={styles.card}>
                    <Link className={styles.articleLink} href={`/presents/${article.slug}`}>
                        <div className={styles.content}>
                            {/* We have to use divs here and not p, h1, and other text components or else you'll cause hydration errors */}
                            <div className={styles.headline} dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
                            <div className={styles.author}>by {authors}</div>
                            <div className={styles.snippet} dangerouslySetInnerHTML={{__html: excerpt}}/>
                        </div>
                    </Link>
                    <img className={styles.img} src={article.jetpack_featured_media_url} />
                </div>
            </div>
    );
}

{/* <div className={styles.primaryCard}>
    <div className={styles.primaryCardShade}/>
    <img className={styles.primaryImg} src={article.jetpack_featured_media_url} />
    <Link className={styles.primaryLink} href={`/presents/${article.slug}`}>
        <div className={styles.cardContainer}>
            <h1 className={styles.cardH1} dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
            <p className={styles.cardAuthors}>by you</p>
            <p className={styles.cardExcerpt} dangerouslySetInnerHTML={{__html: article.excerpt.rendered}}/>
        </div>
    </Link>
</div> */}