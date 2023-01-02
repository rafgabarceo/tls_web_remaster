import Link from "next/link";

export default function ArticlePage({article}) {
    const authors = article.authors.map(author => <Link href={`/by/${author.slug}`}>{author.display_name}</Link>).reduce((prev, curr) => [prev, ', ', curr]);
    return (
        <>
            <h1 dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
            by {authors} <br/><br/>
            <div dangerouslySetInnerHTML={{__html: article.content.rendered}}/>
        </>
    );
}