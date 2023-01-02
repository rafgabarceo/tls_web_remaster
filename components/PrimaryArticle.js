import Link from "next/link";

export default function PrimaryArticle({article}) {
    return (
        <Link href={`/presents/${article.slug}`}>
            <p>-- primary - <span dangerouslySetInnerHTML={{__html: article.title.rendered}}/></p>
        </Link>
        
    );
}