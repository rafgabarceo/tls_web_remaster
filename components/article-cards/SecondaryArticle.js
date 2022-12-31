import Link from "next/link";

export default function SecondaryArticle({article}) {
    return (
        <div className="secondary-article">
            <Link href={`/presents/${article.id}`}>{article.title}</Link> by <Link href={`/by/${article.userId}`}>{article.userId}</Link>
        </div> 
    );
}