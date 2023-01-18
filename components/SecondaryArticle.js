import Link from "next/link";
import styles from '../styles/Home.module.scss';

export default function SecondaryArticle({article}) {

    function cleanTitle(title) {
        const charCountLimit = 70;

        if(title.length > charCountLimit) {
            title = title.substring(0,charCountLimit);
            let lastSpaceIndex = title.substring(0,charCountLimit).lastIndexOf(" ");
            return title.substring(0,lastSpaceIndex)+`...</p>`;
        } else
            return title;
    }

    function listAuthors(authors){
        //TODO: Optimize this function
        //DYK you can actually add <Link></Link> in between these? Too bad there will be hydration errors. TODO: Learn more about hydration errors...

        return authors.map((author, index) =>
            {if(authors.length > 2) {
                if(index == (authors.length - 1)) {
                    return (
                        <>
                            <span> and {author.display_name}</span>
                        </>
                    );
                } else {
                    return (
                        <>
                            <span>{author.display_name}, </span>
                        </>
                    );
                }
            } else if(authors.length == 2) {
                if(index == (authors.length - 1)) {
                    return (
                        <>
                            <span> and {author.display_name}</span>
                        </>
                    );
                } else {
                    return (
                        <span>{author.display_name}</span>
                    );
                }
            } else  {
                return (
                    <>
                        <span>{author.display_name}</span>
                    </>
                )
            }}
        );
    }

    const title = cleanTitle(article.title.rendered);
    const authors = listAuthors(article.authors);

    return (
        <div className={styles.card}>
            <Link className={styles.articleLink} href={`/presents/${article.slug}`}>
                <div className={styles.content}>
                    <div className={styles.authors}>
                        by {authors}
                    </div> 
                    <div className={styles.headline} dangerouslySetInnerHTML={{__html: title}}/>
                </div>
            </Link>
            <img className={styles.img} src={article.jetpack_featured_media_url} />
        </div>
        
    );
}

{/* <Link href={`/presents/${article.slug}`}>
    <p>--- secondary - <span dangerouslySetInnerHTML={{__html: article.title.rendered}}/></p>
</Link> */}