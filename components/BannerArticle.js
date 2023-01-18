import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

import styles from '../styles/Home.module.scss';

export default function BannerArticle({article}) {

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

    const authors = listAuthors(article.authors);
    return (
        <div className={styles.card}>
            <Link className={styles.articleLink} href={`/presents/${article.slug}`}>
                <div className={styles.content}>
                    {/* We have to use divs here and not p, h1, and other text components or else you'll cause hydration errors */}
                    
                    <div className={styles.snippet} dangerouslySetInnerHTML={{__html: article.excerpt.rendered}}/>
                    <div className={styles.authors}>
                        by {authors}
                    </div>
                    <div className={styles.headline} dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
                </div>
            </Link>
            <img className={styles.img} src={article.jetpack_featured_media_url} />
        </div>
    );
}

{/* <Link href={`/presents/${article.slug}`}>
    <p dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
</Link> */}