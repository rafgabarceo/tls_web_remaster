import { useRouter } from "next/router";

export default function Articles() {
    const router = useRouter();
    const year = router.query.year;
    const month = router.query.month;
    const day = router.query.day;

    return (
        <h1>You are looking at articles in the year {year}, month {month}, {day} day</h1>
    );
}