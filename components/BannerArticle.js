import Link from "next/link";

export default function BannerArticle({article}) {
    return (
        <Link href={`/presents/${article.slug}`}>
            <p dangerouslySetInnerHTML={{__html: article.title.rendered}}/>
        </Link>
    );
}