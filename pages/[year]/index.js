import { useRouter } from "next/router";

export default function Articles() {
    const router = useRouter();
    const year = router.query.year;

    return (
        <h1>You are looking at articles in the year {year}</h1>
    );
}