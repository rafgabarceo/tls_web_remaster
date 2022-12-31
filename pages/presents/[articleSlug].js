import { useRouter } from "next/router";

export default function Article({article}) {
    const router = useRouter();
    const articleSlug = router.query.articleSlug;

    return (
        <>
            <h1>this is an article slug: {articleSlug} from the url</h1>
            <h2>Title: {article.title}</h2>
            <p>Body: {article.body}</p>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking', // Why 'blocking' instead of true? Some browsers are not compatible, apparently. Ask the question: How do we know sites like Waybackmachine will save the actual page and not the Loading page?
    };
}

export async function getStaticProps({params}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.articleSlug);
    const data = await response.json();

    if(!data.id) return {notFound: true};

    return {
        props: {
            article: data,
        },
        revalidate: 1,
    };

}