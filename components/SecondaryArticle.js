import Link from "next/link";

export default function SecondaryArticle({article}) {
    return (
        <Link href={`/presents/${article.slug}`}>
            <p>--- secondary - <span dangerouslySetInnerHTML={{__html: article.title.rendered}}/></p>
        </Link>
    );
}