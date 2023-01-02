import { useRouter } from "next/router";

export default function Author({author}) {
    const router = useRouter();
    const authorUsername = router.query.authorUsername;
    return (
        <h1>Details about {author.name}</h1>
    );
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://thelasallian.com/wp-json/wp/v2/users?slug=${params.authorSlug}`);
    const data = await response.json();

    return {
        props: {
            author: data[0]
        },
    };
}