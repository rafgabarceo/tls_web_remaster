import { useRouter } from "next/router";

export default function Author() {
    const router = useRouter();
    const authorUsername = router.query.authorUsername;
    return (
        <h1>Details about {authorUsername}</h1>
    );
}