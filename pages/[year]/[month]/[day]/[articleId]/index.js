import { useRouter } from "next/router";

export default function Articles() {
    const router = useRouter();
    const articleId = router.query.articleId;

    return (
        <h1>You are looking at article #{articleId}</h1>
    );
}