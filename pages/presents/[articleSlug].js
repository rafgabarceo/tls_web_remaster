import { useRouter } from "next/router";
import ArticlePage from "../../components/ArticlePage";

export default function Article({article}) {
    const router = useRouter();
    const articleSlug = router.query.articleSlug;
    return (
        <ArticlePage article={article}/>
    );
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,content,title,slug,categories,jetpack_featured_media_url&slug=${params.articleSlug}`);
    const data = await response.json();

    return {
        props: {
            article: data[0]
        },
    };
}