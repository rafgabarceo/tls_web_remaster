import Link from "next/link";
import styles from '../styles/Home.module.scss';

import {useEffect, useState} from 'react';

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

    const excerpt = cleanExcerpt(article.title.rendered, article.excerpt.rendered);
    const authors = listAuthors(article.authors);

    return (
        <div className={styles.primary}>
            <div className={styles.card}>
                <Link className={styles.articleLink} href={`/presents/${article.slug}`}>
                    <div className={styles.content}>
                        {/* We have to use divs here and not p, h1, and other text components or else you'll cause hydration errors */}
                        
                        <div className={styles.snippet} dangerouslySetInnerHTML={{__html: excerpt}}/>
                        <div className={styles.authors}>
                            by {authors}
                        </div>
                        <div className={styles.headline} dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
                    </div>
                </Link>
                <img className={styles.img} src={article.jetpack_featured_media_url} />
            </div>
        </div>
    );
}